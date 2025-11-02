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
                    <div className="container mx-auto p-6 max-w-4xl">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
