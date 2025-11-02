import axios from "axios";
import { UserPostsProps, UsersProps } from "./types";

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

export async function getUser(id: string): UsersProps {
    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        return res.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getUserPosts(id: string): UserPostsProps[] {
    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        return res.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
