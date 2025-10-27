import axios from "axios";
import { DataAllProps } from "../(types)/types";

export async function fecthAll(): DataAllProps[] {
    try {
        const res = await axios.get(
            "https://restcountries.com/v3.1/all?fields=population,region,capital,name"
        );
        const data = await res.data;
        return data;
    } catch (error) {
        console.error("Erro no fetch:", error);
        return [];
    }
}
