import { Header } from "./_components/Header";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="light">
                <Header />
                {children}
            </body>
        </html>
    );
}
