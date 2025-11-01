"use client";

import { useShop } from "@/app/_utils/store";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
    const { theme, updateTheme } = useShop();

    return (
        <button
            data-slot="button"
            onClick={() => {
                if (theme === "light") {
                    updateTheme("dark");
                } else {
                    updateTheme("light");
                }
            }}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-full"
        >
            {theme === "light" ? (
                <FiMoon className="lucide lucide-moon h-5 w-5" />
            ) : (
                <FiSun className="lucide lucide-sun h-5 w-5" />
            )}
        </button>
    );
}
