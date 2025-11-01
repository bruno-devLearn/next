"use client";

import { handleClick } from "@/app/_utils/handleFav";
import { useShop } from "@/app/_utils/store";
import { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function FavBtn({ id }: { id: string }) {
    const { favorites, updateFav, isIncludes, updateIncludes } = useShop();

    useEffect(() => {
        updateIncludes(favorites.includes(id));
    }, [favorites, id, updateIncludes]);

    const baseClass = "lucide lucide-heart h-5 w-5";

    return (
        <button
            onClick={() =>
                handleClick({ id, isIncludes, favorites, updateFav })
            }
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-md cursor-pointer"
        >
            {isIncludes ? (
                <FaHeart className={baseClass + "fill-red-500 text-red-500"} />
            ) : (
                <FaRegHeart className={baseClass} />
            )}
        </button>
    );
}
