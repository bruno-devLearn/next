"use cache";

import { getData } from "@/app/_utils/fecth";
import { DataProps } from "@/app/_utils/types";
import { Filters } from "./_components/(page)/Filters";
import { Cards } from "./_components/(page)/(Cards)/Cards";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
    const data: DataProps[] = await getData("products");

    const uniqueCategories = [
        "Todos",
        ...Array.from(new Set(data.map((p) => p.category))),
    ];

    return (
        <main>
            <div className="container mx-auto px-4 py-8">
                <Suspense fallback={<Loading />}>
                    <Filters categories={uniqueCategories} />
                    <Cards data={data} />
                </Suspense>
            </div>
        </main>
    );
}
