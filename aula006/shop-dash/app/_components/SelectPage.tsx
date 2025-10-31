"use client";

import { LuLayoutDashboard, LuHouse } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";

export function SelectPage() {
    const pathname = usePathname();
    const router = useRouter();

    const buttons = [
        {
            label: "Produtos",
            icon: <LuHouse className="lucide lucide-house h-4 w-4" />,
            path: "/",
        },
        {
            label: "Dashboard",
            icon: (
                <LuLayoutDashboard className="lucide lucide-layout-dashboard h-4 w-4" />
            ),
            path: "/dashboard",
        },
    ];

    const handleClick = (path: string) => {
        router.push(path);
    };

    return (
        <>
            {buttons.map(({ label, icon, path }) => {
                const isActive = pathname === path;

                const activeClasses = "bg-primary text-primary-foreground";
                const hoverClasses = "hover:bg-accent";

                const baseClasses =
                    "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors";

                return (
                    <button
                        key={path}
                        onClick={() => handleClick(path)}
                        className={`${baseClasses} ${
                            isActive ? activeClasses : hoverClasses
                        }`}
                    >
                        {icon}
                        <span>{label}</span>
                    </button>
                );
            })}
        </>
    );
}
