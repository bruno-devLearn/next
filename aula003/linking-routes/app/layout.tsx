import Link from "next/link";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <h1>vc esta na rota global</h1>
                {children}
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/contato">Contato</Link>
                    </li>
                </ul>
            </body>
        </html>
    );
}
