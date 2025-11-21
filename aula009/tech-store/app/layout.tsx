"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { getTheme } from "./_utils/localStorage";
import { useShop } from "./_utils/store";
import "./globals.css";

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
            <html lang="en">
                <body className={theme}>{children}</body>
            </html>
        </QueryClientProvider>
    );
}
