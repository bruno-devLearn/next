import { useEffect } from "react";
import { Pagination } from "../Pagination";
import { FormContent } from "./FormContent";
import { PostList } from "./PostList";
import { TopContainer } from "./TopContainer";
import { usePosts } from "@/app/_utils/store";
import { useGetPosts } from "@/app/_utils/hooks";

export function MainContent() {
    const { searchValue, page, setTotalPages, totalPages } = usePosts();
    const { data } = useGetPosts(searchValue, page);

    useEffect(() => {
        const total = !searchValue
            ? (data as PostsProps)?.pagination.totalPages
            : (data as PostsBySearch)?.totalPages;

        setTotalPages(total);
    }, [data, searchValue, setTotalPages]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <TopContainer />
            <FormContent />
            <PostList />
            {totalPages > 1 ? <Pagination /> : null}
        </div>
    );
}
