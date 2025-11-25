"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./_utils/fetchData";

export default function Home() {
    const { data } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchData(),
    });

    console.log(data);

    return <h1>teste</h1>;
}
