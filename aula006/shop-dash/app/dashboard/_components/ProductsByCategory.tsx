import { FiShoppingBag } from "react-icons/fi";

import { DataProps } from "@/app/_utils/types";

const colors = ["blue", "green", "purple", "orange"];

export function ProductsByCateg({ data }: { data: DataProps }) {
    const uniqueCategories = Array.from(new Set(data.map((p) => p.category)));

    return (
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border">
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <h4 className="leading-none flex items-center gap-2">
                    <FiShoppingBag className="lucide lucide-shopping-bag h-5 w-5" />
                    Produtos por Categoria
                </h4>
            </div>
            <div
                data-slot="card-content"
                className="px-6 [&:last-child]:pb-6 space-y-4"
            >
                {uniqueCategories.map((categ, i) => {
                    const products = data.filter((p) => p.category === categ);

                    return (
                        <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`w-3 h-3 rounded-full bg-${colors[i]}-500`}
                                    ></div>
                                    <span className="capitalize">{categ}</span>
                                </div>
                                <span
                                    data-slot="badge"
                                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90"
                                >
                                    {products.length}
                                </span>
                            </div>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                role="progressbar"
                                data-state="indeterminate"
                                data-max="100"
                                data-slot="progress"
                                className="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full"
                            >
                                <div
                                    data-state="indeterminate"
                                    data-max="100"
                                    data-slot="progress-indicator"
                                    className="bg-primary h-full w-full flex-1 transition-all"
                                    style={{ transform: "translateX(-70%)" }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
