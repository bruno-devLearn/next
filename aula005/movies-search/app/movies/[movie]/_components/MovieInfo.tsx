import { MovieProps } from "@/app/_utils/types";
import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";

export function MovieInfo({ data }: { data: MovieProps | null }) {
    return (
        <div>
            <h1 className="mb-4">{data?.Title}</h1>
            <div className="flex flex-wrap gap-2">
                <span className="justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 flex items-center gap-1.5">
                    <CiCalendar className="lucide lucide-calendar w-3.5 h-3.5" />
                    {data?.Year}
                </span>
                <span className="justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 flex items-center gap-1.5">
                    <GoClock className="lucide lucide-clock w-3.5 h-3.5" />
                    {data?.Runtime}
                </span>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground">
                    {data?.Rated}
                </span>
                {data?.Genre.split(",")
                    .map((g) => g.trim())
                    .map((g, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
                        >
                            {g}
                        </span>
                    ))}
            </div>
        </div>
    );
}
