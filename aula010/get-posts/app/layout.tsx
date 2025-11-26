import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="py-8">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
