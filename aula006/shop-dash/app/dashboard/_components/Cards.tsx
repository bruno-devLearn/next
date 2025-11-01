"use client";

import { useShop } from "@/app/_utils/store";
import { DataProps } from "@/app/_utils/types";

import { BsBoxSeam } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";

export function Cards({ data }: { data: DataProps }) {
    const { favorites } = useShop();

    const dashboardObj = [
        {
            h4: "Total de Produtos",
            icon: (
                <BsBoxSeam className="lucide lucide-package h-4 w-4 text-muted-foreground" />
            ),
            value: data.length,
            desc: "produtos no catálogo",
        },
        {
            h4: "Favoritos",
            icon: (
                <FaRegHeart className="lucide lucide-heart h-4 w-4 text-red-500" />
            ),
            value: favorites.length,
            desc:
                ((favorites.length / data.length) * 100).toFixed(1) +
                "% do catálogo",
        },
        {
            h4: "Preço Médio",
            icon: (
                <MdAttachMoney className="lucide lucide-dollar-sign h-4 w-4 text-muted-foreground" />
            ),
            value:
                "$" +
                String(
                    (
                        data.reduce((acc, item) => acc + item.price, 0) /
                        data.length
                    ).toFixed(2)
                ),
            desc: "em todos os produtos",
        },
        {
            h4: "Rating Médio",
            icon: (
                <TiStarOutline className="lucide lucide-star h-4 w-4 text-yellow-400" />
            ),
            value: String(
                (
                    data.reduce((acc, item) => acc + item.rating.rate, 0) /
                    data.length
                ).toFixed(1)
            ),
            desc: String(
                data.reduce((acc, item) => acc + item.rating.count, 0)
            ),
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardObj.map((item, i) => (
                <div
                    key={i}
                    className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border"
                >
                    <div className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h4 data-slot="card-title" className="leading-none">
                            {item.h4}
                        </h4>
                        {item.icon}
                    </div>
                    <div className="px-6 [&:last-child]:pb-6"></div>
                    <div
                        data-slot="card-content"
                        className="px-6 [&amp;:last-child]:pb-6"
                    >
                        <div className="text-primary">{item.value}</div>
                        <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
