import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { SelectPage } from "./SelectPage";
import { ThemeToggle } from "./ThemeToggle";
import { Suspense } from "react";

export function TopBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/">
                    <div className="flex items-center gap-2 text-primary">
                        <FiShoppingBag className="lucide lucide-shopping-bag h-6 w-6" />
                        <span>ShopDash</span>
                    </div>
                </Link>
                <nav className="flex items-center gap-4">
                    <Suspense fallback={null}>
                        <SelectPage />
                    </Suspense>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
