"use client";

import { useShop } from "@/app/_utils/store";
import { useEffect } from "react";

export function Filters({ categories }: { categories: string[] }) {
    const { category, updateCateg } = useShop();

    useEffect(() => {
        if (!category && categories.length > 0) {
            updateCateg(categories[0]);
        }
    }, [categories, category, updateCateg]);

    return (
        <div className="mb-8">
            <h1 className="mb-4">Nossos Produtos</h1>
            <div className="flex gap-2 flex-wrap">
                {categories.map((categ, i) => {
                    const isSelected = category === categ;

                    const baseClasses =
                        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3";

                    const conditionalClasses = isSelected
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50";

                    return (
                        <button
                            key={i}
                            data-slot="button"
                            className={`${baseClasses} ${conditionalClasses}`}
                            onClick={() => updateCateg(categ)}
                        >
                            {categ}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
