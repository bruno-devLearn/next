import axios from "axios";

export async function getData(url: string): DataProps[] {
    try {
        const res = await axios.get(`https://fakestoreapi.com/${url}`);
        return res.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
