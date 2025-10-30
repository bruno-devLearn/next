import { DataProps } from "./types";
import axios from "axios";

export async function getData(id: string, index: number): DataProps {
    try {
        const res = await axios.get(
            `http://www.omdbapi.com/?${id}&apikey=68e20ae9&plot=full&page=${index}`
        );

        return res.data;
    } catch (error) {
        console.error(error);
        return {};
    }
}
