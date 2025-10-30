"use client";

import { useEffect, useState } from "react";
import { getData } from "@/app/_utils/fetch";
import { DataProps } from "@/app/_utils/types";
import { Cart } from "./Card";

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
                    {inputValue}&quot;
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {data.Search.map((movie) => (
                    <Cart key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}
