import { Search } from "@/app/_utils/types";
import Image from "next/image";
import Link from "next/link";

export function Cart({ movie }: { movie: Search }) {
    return (
        <Link href={`/movies/${movie.imdbID}`}>
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-[2/3] relative bg-slate-100">
                    {movie.Poster && movie.Poster !== "N/A" ? (
                        <Image
                            src={movie.Poster}
                            alt={movie.Title}
                            fill
                            className="w-full h-full object-cover"
                            quality={100}
                            priority
                        />
                    ) : (
                        <div className="bg-slate-200 w-full h-full flex items-center justify-center">
                            Sem imagem
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="line-clamp-2 mb-2">{movie.Title}</h3>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90">
                            {movie.Year}
                        </span>
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground capitalize">
                            {movie.Type}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
