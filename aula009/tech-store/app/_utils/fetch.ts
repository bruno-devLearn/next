import axios from "axios";
import { CategoryProps, DataProps } from "./types";
import { formatted } from "./formated";

export async function fetchProducts(
    searchValue?: string,
    globalId?: number,
    categories: string[] = [],
    index: number
): Promise<DataProps> {
    const base = "https://dummyjson.com/products";

    // tratar 'index' como número da página (0-based)
    const page = index;
    const skip = page * 30;

    if (searchValue) {
        const res = await axios.get(
            `${base}/search?q=${encodeURIComponent(searchValue)}&skip=${skip}`
        );

        return res.data as DataProps;
    }

    if (globalId) {
        const res = await axios.get(`${base}/${globalId}`);
        return res.data as DataProps;
    }

    if (categories.length > 0 && !categories.includes("todas")) {
        const promises = categories.map((categ) =>
            axios
                .get(`${base}/category/${encodeURIComponent(categ)}`)
                .then((r) => r.data as DataProps)
        );

        const results = await Promise.all(promises); // array de arrays
        const dt = formatted(results, page);
        return dt;
    }

    const res = await axios.get(`${base}?skip=${skip}`);
    return res.data as DataProps;
}

export async function fetchCategories(): Promise<CategoryProps[]> {
    const res = await axios.get("https://dummyjson.com/products/categories");
    return res.data as CategoryProps[];
}
