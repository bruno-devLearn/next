"use client";

import { usePosts } from "./_utils/store";
import { MainContent } from "./_components/(main)/MainContent";
import { useGetPosts } from "./_utils/hooks";
import Error from "./error";
import Loading from "./loading";
import { useEffect } from "react";

export default function Home() {
    const { searchValue, error, setError } = usePosts();
    const { data, isError, isLoading } = useGetPosts(searchValue);

    useEffect(() => {
        setError(isError);
    }, [isError, setError]);

    console.log(data);

    return (
        <>
            {error ? <Error /> : null}
            {isLoading ? <Loading /> : null}
            {data ? <MainContent /> : null}
        </>
    );
}
