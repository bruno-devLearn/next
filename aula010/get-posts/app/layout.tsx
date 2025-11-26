import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Provider } from "./_components/Provider";
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
                <Provider>
                    <main className="py-8">{children}</main>
                </Provider>
                <Footer />
            </body>
        </html>
    );
}
