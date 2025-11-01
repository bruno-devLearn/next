// app/product/[id]/ProductPage.tsx
import { getData } from "@/app/_utils/fecth";
import { DataProps } from "@/app/_utils/types";
import { BackBtn } from "./BackBtn";
import { ImageSide } from "./ImageSide";
import { InfoSide } from "./InfoSide";
import { RelatedProducts } from "./RelatedProducts";

export default async function ProductPage({ id }: { id: string }) {
    const product: DataProps = await getData("products/" + id);

    return (
        <main>
            <div className="container mx-auto px-4 py-8">
                <BackBtn />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <ImageSide product={product} />
                    <InfoSide product={product} />
                </div>
                <RelatedProducts category={product.category} id={id} />
            </div>
        </main>
    );
}
