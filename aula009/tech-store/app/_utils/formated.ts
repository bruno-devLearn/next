import { DataProps } from "./types";

function chunkArray<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

export function formatted(results: DataProps[], page: number): DataProps {
    const total = results.reduce((acc, dt) => acc + dt.total, 0);
    const productsList = results.flatMap((dt) => dt.products);
    const dividido = chunkArray(productsList, 30);

    const data: DataProps = {
        products: dividido[page] ?? [],
        limit: 30,
        skip: page * 30,
        total: total,
    };

    return data;
}
