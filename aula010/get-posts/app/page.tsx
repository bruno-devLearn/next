"use client";

import { usePosts } from "./_utils/store";
import { MainContent } from "./_components/(main)/MainContent";
import { useGetPosts } from "./_utils/hooks";
import Error from "./error";
import Loading from "./loading";
import { useEffect } from "react";

export default function Home() {
    const { searchValue, error, setError, loading, setLoad } = usePosts();
    const { data, isError, isLoading } = useGetPosts(searchValue);

    useEffect(() => {
        setError(isError);
        setLoad(isLoading);
    }, [isError, setError, isLoading, setLoad]);

    return (
        <>
            {error ? <Error /> : null}
            {loading ? <Loading /> : null}
            {data ? <MainContent /> : null}
        </>
    );
}
