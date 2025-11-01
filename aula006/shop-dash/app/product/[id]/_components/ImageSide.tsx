import { DataProps } from "@/app/_utils/types";
import Image from "next/image";

export function ImageSide({ product }: { prduct: DataProps }) {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 flex items-center justify-center">
            <Image
                className="max-h-[500px] object-contain"
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
            />
        </div>
    );
}
