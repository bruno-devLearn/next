import { IoMdArrowBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export function TopBar() {
    return (
        <Link href="/">
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-md">
                            <IoMdArrowBack />
                        </button>
                        <h2 className="flex items-center gap-2">
                            <FaHeart className="lucide lucide-heart w-5 h-5 text-red-500 fill-red-500" />
                            Meus Favoritos
                        </h2>
                    </div>
                </div>
            </div>
        </Link>
    );
}
