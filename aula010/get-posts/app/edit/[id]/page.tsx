"use client";

import { useGetPost } from "@/app/_utils/hooks";
import { useEffect } from "react";
import { usePosts } from "@/app/_utils/store";
import { useParams } from "next/navigation";
import Error from "@/app/error";
import Loading from "@/app/loading";
import { MainContent } from "./_components/MainContent";

export default function Page() {
    const { setError, setLoad, error, loading } = usePosts();
    const { id } = useParams() as number;

    const { data, isError, isLoading } = useGetPost(id);

    useEffect(() => {
        setError(isError);
        setLoad(isLoading);
    }, [isError, setError, isLoading, setLoad]);

    return (
        <>
            {error ? <Error /> : null}
            {loading ? <Loading /> : null}
            {data ? <MainContent post={data.data} /> : null}
        </>
    );
}
