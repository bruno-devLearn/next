import axios from "axios";
import { UsersProps } from "./types";

export async function getUsers(): UsersProps[] {
    try {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        return res.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
