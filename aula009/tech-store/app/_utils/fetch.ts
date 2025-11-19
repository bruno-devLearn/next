import axios from "axios";
import { CategoryProps, DataProps } from "./types";
import { formatted } from "./formated";

export async function fetchProducts(
    searchValue?: string,
    globalId?: number,
    categories: string[] = []
): Promise<DataProps> {
    const base = "https://dummyjson.com/products";

    if (searchValue) {
        const res = await axios.get(
            `${base}/search?q=${encodeURIComponent(searchValue)}`
        );

        return res.data as DataProps;
    }

    if (globalId) {
        const res = await axios.get(`${base}/${globalId}`);
        return res.data as DataProps;
    }

    if (categories.length > 0 && !categories.includes("todas")) {
        // para cada categoria retornamos o array de produtos e depois concatenamos
        const promises = categories.map((categ) =>
            axios
                .get(`${base}/category/${encodeURIComponent(categ)}`)
                .then((r) => r.data as DataProps)
        );

        const results = await Promise.all(promises); // array de arrays
        const teste = formatted(results);
        return teste;
    }

    const res = await axios.get(base);
    return res.data as DataProps;
}

export async function fetchCategories(): Promise<CategoryProps[]> {
    const res = await axios.get("https://dummyjson.com/products/categories");
    return res.data as CategoryProps[];
}
