import { ThemeProvider } from "./_components/ThemeProvider";
import { TopBar } from "./_components/TopBar";
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
