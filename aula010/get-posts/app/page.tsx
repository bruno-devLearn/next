"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./_utils/fetchPosts";
import { usePosts } from "./_utils/store";
import Error from "./error";
import Loading from "./loading";
import { MainContent } from "./_components/(main)/MainContent";

export default function Home() {
    const { searchValue } = usePosts();

    const { data, isError, isLoading } = useQuery({
        queryKey: ["products", searchValue],
        queryFn: () => fetchData(searchValue),
    });

    console.log(data);

    return (
        <>
            {isError ? <Error /> : null}
            {isLoading ? <Loading /> : null}
            {data ? <MainContent /> : null}
        </>
    );
}
