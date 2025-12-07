import { UserDetailsResponse } from "./types";
import axios from "axios";

interface GetUserProps {
    id: string;
    setError: (newValue: Error) => void;
    setIsLoading: (newValue: boolean) => void;
}

export async function getUser({
    id,
    setIsLoading,
    setError,
}: GetUserProps): Promise<UserDetailsResponse | undefined> {
    setIsLoading(true);

    try {
        const res = await axios.get<UserDetailsResponse>(`/api/user/${id}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) {
            setError(err);
        } else {
            setError(new Error("Erro desconhecido"));
        }
        return undefined;
    } finally {
        setIsLoading(false);
    }
}
