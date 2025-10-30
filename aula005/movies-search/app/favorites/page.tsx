"use client";

import { useEffect, useState } from "react";
import { useFav } from "../_utils/favorites";
import { getFav } from "../_utils/fetch";
import { MovieProps } from "../_utils/types";

export default function Page() {
    const [data, setData] = useState<MovieProps | null>(null);
    const { favorites } = useFav();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getFav(favorites);
                setData(result);
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
            }
        };

        fetchData();
    }, [favorites]);

    console.log(data);

    return <h1>teste</h1>;
}
