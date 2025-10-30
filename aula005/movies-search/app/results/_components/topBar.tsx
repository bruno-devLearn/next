"use client";

import { FavBtn } from "@/app/_components/favbtn";
import { IoMdArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useFav } from "@/app/_utils/favorites";

export function TopBar() {
    const { inputValue, updateInput } = useFav();

    return (
        <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center gap-4 mb-4">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-md">
                        <Link href="/">
                            <IoMdArrowBack />
                        </Link>
                    </button>
                    <h2 className="flex-1">Buscador de Filmes</h2>
                    <FavBtn />
                </div>
                <form className="relative max-w-2xl">
                    <CiSearch className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => updateInput(e.target.value)}
                        placeholder="Digite o nome de um filme..."
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-12"
                    />
                </form>
            </div>
        </div>
    );
}
