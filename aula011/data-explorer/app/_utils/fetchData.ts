import axios from "axios";
import { UserDetailsResponse } from "./types";
import { Dispatch, SetStateAction } from "react";

export async function getUser(
    id: string,
    setError: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>
): Promise<UserDetailsResponse | undefined> {
    setLoading(true); // Inicia o loading
    try {
        const res = await axios.get<UserDetailsResponse>(`/api/user/${id}`);
        return res.data;
    } catch (error) {
        setError(true); // Define erro como verdadeiro em caso de falha
        console.error("Error fetching user data:", error); // Log do erro
    } finally {
        setLoading(false); // Finaliza o loading
    }
}
