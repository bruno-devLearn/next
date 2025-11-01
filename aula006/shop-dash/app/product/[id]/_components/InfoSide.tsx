import { DataProps } from "@/app/_utils/types";
import { TiStarFullOutline } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { FavBtn } from "./FavBtn";

export function InfoSide({ product }: { product: DataProps }) {
    return (
        <div className="space-y-6">
            <div>
                <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 mb-3"
                >
                    {product.category}
                </span>
                <h1 className="mb-4">{product.title}</h1>
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                        <TiStarFullOutline className="lucide lucide-star h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="ml-2 text-primary">
                            {product.rating.rate}
                        </span>
                    </div>
                    <span className="text-muted-foreground">
                        {product.rating.count} avaliações
                    </span>
                </div>
                <div className="text-primary mb-6">${product.price}</div>
            </div>
            <div className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div>
            <div>
                <h3 className="mb-2">Descrição</h3>
                <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                </p>
            </div>
            <div className="flex gap-4">
                <button
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 flex-1 cursor-pointer"
                >
                    <FiShoppingCart className="lucide lucide-shopping-cart h-4 w-4 mr-2" />
                    Adicionar ao Carrinho
                </button>
                <FavBtn id={product.id} />
            </div>
        </div>
    );
}
