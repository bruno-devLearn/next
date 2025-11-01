"use client";

import { getData } from "@/app/_utils/fecth";
import { DataProps } from "@/app/_utils/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FavCard({ id }: { id: string }) {
    const [data, setData] = useState<DataProps | null>([]);

    useEffect(() => {
        async function fetcher() {
            const dt = await getData("products/" + id);
            setData(dt);
        }

        fetcher();
    }, [id]);

    return (
        <Link href={`/product/${id}`}>
            <div
                data-slot="card-content"
                className="px-6 [&amp;:last-child]:pb-6 cursor-pointer"
            >
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent transition-colors">
                        <Image
                            src={data?.image}
                            alt={data?.title}
                            width={48}
                            height={48}
                            className="object-contain bg-gray-50 dark:bg-gray-900 rounded"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="truncate">{data?.title}</p>
                            <p className="text-muted-foreground">
                                ${data?.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
