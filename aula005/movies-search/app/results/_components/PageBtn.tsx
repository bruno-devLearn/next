import { ReactNode } from "react";

interface PageBtnProps {
    index: number;
    children: ReactNode;
    onClick?: () => void;
}

export function PageBtn({ children, index, onClick }: PageBtnProps) {
    return (
        <li data-slot="pagination-item">
            {children === "..." ? (
                <span className="px-4">{children}</span>
            ) : children === index ? (
                <div
                    aria-current="page"
                    data-slot="pagination-link"
                    data-active="true"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-md cursor-pointer"
                >
                    {children}
                </div>
            ) : (
                <div
                    onClick={onClick}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 py-2 has-[>svg]:px-3 gap-1 px-2.5 sm:pl-2.5 cursor-pointer"
                >
                    {children}
                </div>
            )}
        </li>
    );
}
