"use client";

import { handleClick } from "@/app/_utils/handleFav";
import { useShop } from "@/app/_utils/store";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function FavBtn({ id }: { id: string }) {
    const { favorites, updateFav } = useShop();

    const isIncludes = favorites.includes(id); // calcula direto aqui
    const baseClass = "lucide lucide-heart h-5 w-5";

    return (
        <button
            onClick={() =>
                handleClick({ id, isIncludes, favorites, updateFav })
            }
            className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors cursor-pointer"
        >
            {isIncludes ? (
                <FaHeart className={baseClass + " fill-red-500 text-red-500"} />
            ) : (
                <FaRegHeart className={baseClass + " text-gray-500"} />
            )}
        </button>
    );
}
