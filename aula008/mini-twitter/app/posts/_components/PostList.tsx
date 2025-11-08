import { PostObj } from "@/app/_utils/types";
import { EditCard, PostCard } from "./PostCard";

type PostsProps = {
    posts: PostObj[];
    editingId: number | null;
    setEditingId: Dispatch<SetStateAction<number | null>>;
};

export function PostList({ posts, editingId, setEditingId }: PostsProps) {
    return (
        <>
            {posts.map((post, i) =>
                editingId === post.id ? (
                    <EditCard post={post} setEditingId={setEditingId} key={i} />
                ) : (
                    <PostCard post={post} setEditingId={setEditingId} key={i} />
                )
            )}
        </>
    );
}
