import axios from "axios";
import { Post } from "./types";

export async function postLike(id: number) {
    await axios.post(`https://apimocker.com/posts/${id}/likes`);
}

export async function deletePost(id: number) {
    await axios.delete(`https://apimocker.com/posts/${id}`);
}

export async function createPost(post: Post) {
    await axios.post("https://apimocker.com/posts", post);
}
