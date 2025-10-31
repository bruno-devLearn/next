"use client";

import { getData } from "@/app/_utils/fecth";
import { DataProps } from "@/app/_utils/types";
import { useEffect, useState } from "react";

export function Filters() {
    const [data, setData] = useState<DataProps[] | null>();

    useEffect(() => {
        async function fecther() {
            const dt = await getData("products");
            setData(dt);
        }

        fecther();
    }, []);

    console.log(data);

    return <h1>teste</h1>;
}
