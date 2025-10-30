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
