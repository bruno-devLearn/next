"use client";

import { useEffect } from "react";
import { getTheme } from "./_utils/localStorage";
import { useShop } from "./_utils/store";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { updateTheme, theme } = useShop();

    useEffect(() => {
        const t = getTheme();
        updateTheme(t);
    }, [updateTheme]);

    return (
        <html lang="en">
            <body className={theme}>{children}</body>
        </html>
    );
}
