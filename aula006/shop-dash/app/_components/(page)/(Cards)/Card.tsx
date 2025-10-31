import { TiStarFullOutline } from "react-icons/ti";
import { DataProps } from "@/app/_utils/types";
import { FavBtn } from "./FavBtn";
import Image from "next/image";
import Link from "next/link";

export function Card({ product }: { product: DataProps }) {
    return (
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-square bg-gray-50 dark:bg-gray-900">
                <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4"
                    width={500} // ajuste para o tamanho desejado
                    height={500} // ajuste para o tamanho desejado
                />
                <FavBtn id={product.id} />
            </div>
            <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-4"
            >
                <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 mb-2"
                >
                    {product.category}
                </span>
                <h3 className="line-clamp-2 mb-2">{product.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                        <TiStarFullOutline className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1">{product.rating.rate}</span>
                    </div>
                    <span className="text-muted-foreground">
                        ({product.rating.count})
                    </span>
                </div>
                <div className="text-primary">${product.price}</div>
            </div>
            <div
                data-slot="card-footer"
                className="flex items-center [.border-t]:pt-6 p-4 pt-0"
            >
                <Link
                    href={`/product/${product.id}`}
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full"
                >
                    Ver Detalhes
                </Link>
            </div>
        </div>
    );
}
