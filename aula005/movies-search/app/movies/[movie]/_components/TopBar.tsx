import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export function TopBar() {
    return (
        <Link href="/results">
            <div className="border-b bg-white sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-md cursor-pointer">
                        <IoArrowBack />
                    </button>
                </div>
            </div>
        </Link>
    );
}
