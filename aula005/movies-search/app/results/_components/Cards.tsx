"use client";

import { useEffect, useState } from "react";
import { getData } from "@/app/_utils/fetch";
import { DataProps } from "@/app/_utils/types";

export function Cards({ inputValue }: { inputValue: string }) {
    const [data, setData] = useState<DataProps | null>(null);

    useEffect(() => {
        if (!inputValue) return;

        const fetchData = async () => {
            try {
                const result = await getData(`s=${inputValue}`);
                setData(result);
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
            }
        };

        fetchData();
    }, [inputValue]);

    console.log(data);

    return <h1>teste</h1>;
}
