"use client";

import { useEffect, useState } from "react";
import { useFav } from "../_utils/favorites";
import { getFav } from "../_utils/fetch";
import { MovieProps } from "../_utils/types";
import { TopBar } from "./_components/TopBar";
import { Empty } from "./_components/Empty";
import { Cards } from "./_components/Cards";

export default function Page() {
    const [data, setData] = useState<MovieProps[] | null>(null);
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

    return (
        <div className="min-h-screen bg-slate-50">
            <TopBar />
            {data?.length === 0 ? (
                <Empty />
            ) : (
                <Cards movies={data} favorites={favorites} />
            )}
        </div>
    );
}
