import "../globals.css";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <h1>vc esta na rota /</h1>
            {children}
        </section>
    );
}
