import axios from "axios";
import { PostsBySearch, PostsProps } from "./types";

export async function fetchData(
    searchValue?: string,
    page: number = 1
): PostsProps | PostsBySearch {
    const baseUrl = "https://apimocker.com/posts";

    if (searchValue) {
        const res = await axios.get(
            `${baseUrl}search?q=${searchValue}_page=${page}`
        );
        return res.data;
    }

    const res = await axios.get(`${baseUrl}_page=${page}`);
    return res.data;
}
