"use client";

import { useEffect, useState } from "react";
import { getData } from "../_utils/fecth";
import { DataProps } from "../_utils/types";
import { Cards } from "./_components/Cards";
import Loading from "../loading";
import { ProductsByCateg } from "./_components/ProductsByCategory";
import { FavCards } from "./_components/FavCards";

export default function Page() {
    const [data, setData] = useState<DataProps[]>([]);

    useEffect(() => {
        async function fetcher() {
            const dt = await getData("products");
            setData(dt);
        }

        fetcher();
    }, []);

    if (data.length === 0) {
        return <Loading />;
    }

    return (
        <main>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="mb-2">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Estatísticas e informações sobre seus produtos
                    </p>
                </div>
                <Cards data={data} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ProductsByCateg data={data} />
                    <FavCards />
                </div>
            </div>
        </main>
    );
}
