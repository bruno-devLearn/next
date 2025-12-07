import { PostsPage } from "./Posts";
import { EmptyState } from "./Skeletons";

export function DataView({ data }: { data: UserDetailsResponse }) {
    return (
        <>
            {data.totalPosts === 0 ? <EmptyState /> : <PostsPage data={data} />}
        </>
    );
}
