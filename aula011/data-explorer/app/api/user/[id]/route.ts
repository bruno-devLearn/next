import { PostProps, UserProps } from "@/app/utils/types";
import axios from "axios";
import { NextResponse } from "next/server";

const baseUrl = "https://jsonplaceholder.typicode.com";

interface CommentsProps {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        //user fetch
        const userResponse = await axios.get<UserProps>(
            `${baseUrl}/users/${id}`
        );
        const user = userResponse.data;

        // posts fetch
        const postsResponse = await axios.get<PostProps[]>(
            `${baseUrl}/posts?userId=${id}`
        );
        const posts = postsResponse.data;

        // comments fetch
        const commentsResponse = await axios.get<CommentsProps[]>(
            `${baseUrl}/comments`
        );
        const allComments = commentsResponse.data;

        // transform all posts
        const transformedPosts = posts.map((post) => {
            const commentsCount = allComments.filter(
                (comment) => comment.postId === post.id
            ).length;

            return {
                id: post.id,
                title: post.title,
                body: post.body,
                commentsCount: commentsCount,
            };
        });

        // return
        return NextResponse.json({
            user: user,
            posts: transformedPosts,
            totalPosts: posts.length,
        });
    } catch (error) {
        console.error("Erro na API:", error);

        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
                return NextResponse.json(
                    { error: "Usuário não encontrado" },
                    { status: 404 }
                );
            }
            return NextResponse.json(
                { error: error.message || "Erro ao buscar dados" },
                { status: error.response?.status || 500 }
            );
        }

        return NextResponse.json(
            { error: "Erro ao buscar dados" },
            { status: 500 }
        );
    }
}
