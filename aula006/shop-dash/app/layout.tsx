import { ThemeProvider } from "./_components/(topbar)/ThemeProvider";
import { TopBar } from "./_components/(topbar)/TopBar";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <TopBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
