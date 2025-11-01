"use client";

import { useShop } from "@/app/_utils/store";
import { FaRegHeart } from "react-icons/fa";
import { FavCard } from "./FavCard";

export function FavCards() {
    const { favorites } = useShop();

    return (
        <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border"
        >
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <h4 className="leading-none flex items-center gap-2">
                    <FaRegHeart className="lucide lucide-heart h-5 w-5 text-red-500" />
                    Seus Favoritos ({favorites.length})
                </h4>
            </div>
            {favorites.length > 0 ? (
                favorites.map((fav, i) => <FavCard key={i} id={fav} />)
            ) : (
                <Empty />
            )}
        </div>
    );
}

function Empty() {
    return (
        <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6">
            <p className="text-muted-foreground text-center py-8">
                Você ainda não tem produtos favoritos
            </p>
        </div>
    );
}
