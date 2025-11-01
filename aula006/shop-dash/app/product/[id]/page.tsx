import { Suspense } from "react";
import Loading from "@/app/loading";
import ProductPage from "./_components/ProductPage";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params; // <- DESPACOTA AQUI
    return (
        <Suspense fallback={<Loading />}>
            <ProductPage id={id} />
        </Suspense>
    );
}
