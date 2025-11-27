import axios from "axios";

export async function postLike(id: number) {
    await axios.post(`https://apimocker.com/posts/${id}/likes`);
}

export async function deletePost(id: number) {
    await axios.delete(`https://apimocker.com/posts/${id}`);
}
