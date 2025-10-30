import { MovieProps } from "@/app/_utils/types";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export function Card({ movie }: { movie: MovieProps }) {
    return (
        <Link href={`/movies/${movie.imdbID}`}>
            <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
            >
                <div className="aspect-[2/3] relative bg-slate-100">
                    <Image
                        src={movie.Poster}
                        alt={movie.Title}
                        width={300} // baseado no SX300 da URL
                        height={450} // proporção 2:3
                        className="w-full h-full object-cover"
                        quality={100} // máxima qualidade
                        priority // carrega mais rápido na página
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md">
                        <FaHeart className="lucide lucide-heart w-4 h-4 text-red-500 fill-red-500" />
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="line-clamp-2 mb-2">{movie.Title}</h3>
                    <div className="flex items-center gap-2">
                        <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90"
                        >
                            {movie.Year}
                        </span>
                        <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground capitalize"
                        >
                            {movie.Type}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
