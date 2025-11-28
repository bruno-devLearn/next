import axios from "axios";
import { LikeProps, Post, PostProps, PostsBySearch, PostsProps } from "./types";

export async function fetchData(
    searchValue?: string,
    page: number = 1
): PostsProps | PostsBySearch {
    const baseUrl = "https://apimocker.com/posts";

    if (searchValue) {
        const res = await axios.get(
            `${baseUrl}/search?q=${searchValue}&_page=${page}`
        );

        return res.data;
    }

    const res = await axios.get(`${baseUrl}?_page=${page}`);
    return res.data;
}

export async function FetchLikes(id: number): LikeProps {
    const res = await axios.get(`https://apimocker.com/posts/${id}/likes`);
    return res.data;
}

export async function fetchPost(id: number): PostProps {
    const res = await axios.get(`https://apimocker.com/posts/${id}`);
    return res.data;
}

export async function editPost(id: number, post: Post) {
    await axios.put(`https://apimocker.com/posts/${id}`, post);
}
