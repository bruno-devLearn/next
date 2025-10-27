"use client";

import { useQuery } from "@tanstack/react-query";
import { fecthAll } from "./_utils/(fetchs)/fecth";
import Loading from "./loading";

export default function Home() {
    const { data, isPending } = useQuery({
        queryKey: ["dataAll"],
        queryFn: fecthAll,
    });

    console.log(data);

    if (isPending) return <Loading />;

    return (
        <>
            {/* content here*/}
            {/* content here*/}
            {/* content here*/}
        </>
    );
}
