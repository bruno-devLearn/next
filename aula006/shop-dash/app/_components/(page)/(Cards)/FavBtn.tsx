"use client";

import { useShop } from "@/app/_utils/store";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function FavBtn({ id }: { id: string }) {
    const { favorites, updateFav } = useShop();
    const [isIncludes, setIsIncludes] = useState(false);

    useEffect(() => {
        setIsIncludes(favorites.includes(id));
    }, [favorites, id]);

    const handleClick = () => {
        let newArray;

        if (isIncludes) {
            newArray = favorites.filter((p) => p !== id);
        } else {
            newArray = [...favorites, id];
        }

        updateFav(newArray);
    };

    const baseClass = "lucide lucide-heart h-5 w-5";

    return (
        <button
            onClick={handleClick}
            className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors cursor-pointer"
        >
            {isIncludes ? (
                <FaHeart className={baseClass + "fill-red-500 text-red-500"} />
            ) : (
                <FaRegHeart className={baseClass + "text-gray-500"} />
            )}
        </button>
    );
}
