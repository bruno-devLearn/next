import { DataProps, MovieProps } from "./types";
import axios from "axios";

export async function getData(
    id: string,
    index: number
): DataProps | MovieProps {
    try {
        const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

        const res = await axios.get(
            `http://www.omdbapi.com/?${id}&apikey=${apiKey}&plot=full&page=${index}`
        );

        return res.data;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export async function getFav(favorites: string[]): Promise<MovieProps[]> {
    const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

    if (!favorites || favorites.length === 0) return [];

    try {
        const promises = favorites.map((id) =>
            axios
                .get(
                    `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}&plot=full`
                )
                .then((res) => res.data as MovieProps)
        );

        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
        return [];
    }
}
