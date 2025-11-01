import { getData } from "@/app/_utils/fecth";
import { DataProps } from "@/app/_utils/types";
import Image from "next/image";
import Link from "next/link";

interface RelatedProps {
    category: string;
    id: string;
}

export async function RelatedProducts({ category, id }: RelatedProps) {
    const data: DataProps[] = await getData("products");

    const filteredData = data.filter((p) => p.category === category);
    const products = filteredData.filter((p) => p.id !== Number(id));

    return (
        <div>
            <h2 className="mb-6">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((p) => (
                    <Link key={p.id} href={`/product/${p.id}`}>
                        <div
                            data-slot="card"
                            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            <div className="aspect-square bg-gray-50 dark:bg-gray-900">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-contain p-4"
                                />
                            </div>
                            <div
                                data-slot="card-content"
                                className="[&amp;:last-child]:pb-6 p-4"
                            >
                                <span
                                    data-slot="badge"
                                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 mb-2"
                                ></span>
                                <h4 className="line-clamp-2 mb-2">{p.title}</h4>
                                <div className="text-primary">${p.price}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
