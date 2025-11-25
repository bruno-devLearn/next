import { Header } from "./_components/Header";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-50">
                <Header />
                {children}
            </body>
        </html>
    );
}
