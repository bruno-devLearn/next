"use client";

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFav } from "../_utils/favorites";
import Link from "next/link";

export function FavBtn() {
    const { favorites } = useFav();

    return (
        <Link href="/favorites">
            <div className="absolute top-4 right-4">
                <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 flex items-center gap-2 cursor-pointer">
                    <div className="icon">
                        {favorites.length > 0 ? (
                            <FaHeart className="lucide lucide-heart w-4 h-4 text-red-500 fill-red-500" />
                        ) : (
                            <FaRegHeart className="lucide lucide-heart w-4 h-4 " />
                        )}
                    </div>
                    <span>Favoritos</span>
                    {favorites.length > 0 ? (
                        <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {favorites.length}
                        </span>
                    ) : null}
                </button>
            </div>
        </Link>
    );
}
