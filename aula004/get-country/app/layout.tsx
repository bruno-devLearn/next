"use client";

import { useState } from "react";
import { Header } from "./_components/(header)/Header";
import "./globals.css";

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
                {children}
            </body>
        </html>
    );
}
