import axios from "axios";
import { CategoryProps, ProductProps } from "./types";

export async function fetchProducts(
    searchValue?: string,
    globalId?: number
): Promise<ProductProps | ProductProps[]> {
    const base = "https://dummyjson.com/products";

    if (searchValue) {
        const res = await axios.get(`${base}/search?q=${searchValue}`);
        return res.data.products as ProductProps[]; // retorna array consistente
    }

    if (globalId) {
        const res = await axios.get(`${base}/${globalId}`);
        return res.data as ProductProps; // retorna um produto
    }

    const res = await axios.get(base);
    return res.data.products as ProductProps[]; // lista padrão
}

export async function fetchCategories(): Promise<CategoryProps[]> {
    const res = await axios.get("https://dummyjson.com/products/categories");
    return res.data as CategoryProps[];
}
