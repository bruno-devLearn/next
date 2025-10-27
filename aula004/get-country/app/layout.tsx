"use client";

import { useState } from "react";
import { Header } from "./_utils/(header)/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState("light");

    return (
        <html lang="en">
            <body className={theme}>
                <Header theme={theme} setTheme={setTheme} />
                <QueryClientProvider client={queryClient}>
                    <main>{children}</main>
                </QueryClientProvider>
            </body>
        </html>
    );
}
