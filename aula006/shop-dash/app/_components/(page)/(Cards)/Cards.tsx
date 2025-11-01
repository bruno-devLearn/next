"use client";

import { useShop } from "@/app/_utils/store";
import { DataProps } from "@/app/_utils/types";
import { Card } from "./Card";

export function Cards({ data }: { data: DataProps[] }) {
    const { category } = useShop();

    const filteredProducts =
        category === "Todos"
            ? data
            : data.filter((p) => p.category === category);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}
