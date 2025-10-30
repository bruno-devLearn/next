import { DataProps } from "./types";
import axios from "axios";

export async function getData(id: string): DataProps {
    try {
        const res = await axios.get(
            `http://www.omdbapi.com/?${id}&apikey=68e20ae9&plot=full`
        );

        return res.data;
    } catch (error) {
        console.error(error);
        return {};
    }
}
