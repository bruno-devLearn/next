"use client";

import { useEffect, useState } from "react";
import { getData } from "@/app/_utils/fetch";
import { DataProps } from "@/app/_utils/types";
import { Cart } from "./Card";
import { Pages } from "./Pages";

export function Cards({
    searchValue,
    index,
}: {
    searchValue: string;
    index: number;
}) {
    const [data, setData] = useState<DataProps | null>(null);

    useEffect(() => {
        if (!searchValue) return;

        const fetchData = async () => {
            try {
                const result = await getData(`s=${searchValue}`, index);
                setData(result);
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
            }
        };

        fetchData();
    }, [searchValue, index]);

    if (!data?.Search?.length) {
        return (
            <div className="container mx-auto px-4 py-8">
                <p className="text-slate-600">Nenhum resultado encontrado.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <p className="text-slate-600">
                    Encontrados {data.totalResults} resultados para &quot;
                    {searchValue}&quot;
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {data.Search.map((movie) => (
                    <Cart key={movie.imdbID} movie={movie} />
                ))}
            </div>

            <Pages movies={data} />
        </div>
    );
}
