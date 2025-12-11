import axios from "axios";
import { AuthResponse, isAuthProps, User } from "./types";
import { toastError, toastSucess } from "./toast";

interface fethcDataProps {
    currentLang: "eng" | "pt";
    user?: User;
    setError: (newValue: string) => void;
    setIsLoading?: (newValue: boolean) => void;
}

export async function getIsAuth({
    currentLang,
    setError,
    setIsLoading,
}: fethcDataProps): Promise<isAuthProps> {
    setIsLoading(true);

    try {
        const res = await axios.get<isAuthProps>(
            "http://localhost:3000/api/login"
        );

        return res.data;
    } catch (error) {
        if (error instanceof Error) {
            setError(error.message);
        } else {
            if (currentLang === "eng") {
                setError("internal server error");
            } else {
                setError("erro interno do servidor");
            }

            return { isAuth: false };
        }
    } finally {
        setIsLoading(false);
    }
}

export async function setAuth({
    currentLang,
    user,
    setError,
}: fethcDataProps): Promise<AuthResponse> {
    try {
        if (!user?.email || !user.password || !user) {
            throw new Error(
                currentLang === "eng"
                    ? "Please fill in all fields"
                    : "Por favor, preencha todos os campos."
            );
        }

        const res = await axios.post<AuthResponse>(
            "http://localhost:3000/api/login",
            user
        );

        toastSucess(res.data.message);
        return { ...res.data, success: true };
    } catch (error) {
        let message =
            currentLang === "eng"
                ? "internal server error"
                : "erro interno do servidor";

        if (error instanceof Error) {
            message = error.message;
        }

        setError(message);

        toastError(message);
        return { message, success: false };
    }
}
