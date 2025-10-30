import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

export function Empty() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center py-20">
                <FaRegHeart className="lucide lucide-heart w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 mb-4">
                    Você ainda não possui filmes favoritos
                </p>
                <Link href="/">
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 cursor-pointer"
                    >
                        Buscar filmes
                    </button>
                </Link>
            </div>
        </div>
    );
}
