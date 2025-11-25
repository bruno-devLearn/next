import { DataProps, Datum } from "./types";
import axios from "axios";

// importe/defina DataProps onde for apropriado
async function getPosts(searchValue?: string): Promise<DataProps> {
    const baseUrl = "https://apimocker.com/posts";

    if (searchValue) {
        const res = await axios.get<DataProps>(
            `${baseUrl}/search?q=${encodeURIComponent(searchValue)}`
        );

        return res.data;
    }

    const res = await axios.get<DataProps>(baseUrl);
    return res.data;
}

export async function fetchData(searchValue?: string): Promise<Datum[]> {
    const dt = await getPosts(searchValue);

    const formData = await Promise.all(
        dt.data.map(async (post) => {
            const res = await axios.get(
                `https://apimocker.com/posts/${post.id}/likes`
            );
            const likes: number = res.data.likes;

            return {
                ...post,
                likes,
            };
        })
    );

    return {
        ...dt,
        data: formData,
    };
}
