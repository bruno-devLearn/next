import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { SelectPage } from "./SelectPage";

export function TopBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <FiShoppingBag className="lucide lucide-shopping-bag h-6 w-6 text-primary" />
                        <span>ShopDash</span>
                    </div>
                </Link>
                <nav className="flex items-center gap-4">
                    <SelectPage />
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-full"
                    ></button>
                </nav>
            </div>
        </header>
    );
}
