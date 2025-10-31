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
                <div className="min-h-screen bg-background">
                    <TopBar />
                    {children}
                </div>
            </body>
        </html>
    );
}
