"use client";

import { useEffect } from "react";
import { useShop } from "@/app/_utils/store";
import { getTheme } from "@/app/_utils/localStorage";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme, updateTheme } = useShop();

    useEffect(() => {
        updateTheme(getTheme());
    }, [updateTheme]);

    return (
        <div className={`min-h-screen bg-background ${theme}`}>{children}</div>
    );
}
