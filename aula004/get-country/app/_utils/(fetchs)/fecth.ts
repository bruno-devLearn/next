import axios from "axios";
import { DataAllProps } from "../(types)/types";

export async function fecther(
    country?: string,
    region: string
): DataAllProps[] {
    try {
        if (country) {
            const res = await axios.get(
                `https://restcountries.com/v3.1/name/${country}?fields=population,region,capital,name,cca3,flags,subregion,tld,currencies,languages,borders`
            );

            return res.data;
        } else if (region !== "All Regions") {
            const res = await axios.get(
                `https://restcountries.com/v3.1/region/${region}?fields=population,region,capital,name,cca3,flags,subregion,tld,currencies,languages,borders`
            );

            return res.data;
        } else {
            const res = await axios.get(
                "https://restcountries.com/v3.1/all?fields=population,region,capital,name,cca3,flags"
            );

            return res.data;
        }
    } catch (error) {
        console.error("Erro no fetch:", error);
        return [];
    }
}
