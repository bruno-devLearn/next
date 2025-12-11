import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { isAuthProps } from "./types";

interface MultiLangProps {
    currentLang: "pt" | "eng";
    setCurrentLang: (newLang: "pt" | "eng") => void;
}

export const useMultiLang = create<MultiLangProps>((set) => ({
    currentLang: "eng",
    setCurrentLang: (newLang) => set({ currentLang: newLang }),
}));

export function useGetLang() {
    const { currentLang, setCurrentLang } = useMultiLang();
    const pathname = usePathname();

    if (pathname.startsWith("/pt")) {
        setCurrentLang("pt");
    } else if (pathname.startsWith("/en")) {
        setCurrentLang("eng");
    }

    return currentLang;
}

export function useGetAuth() {
    const currentLang = useGetLang();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<isAuthProps | null>(null);

    useEffect(() => {
        async function fetchData() {
            const isAuth = await getIsAuth({
                currentLang,
                setError,
                setIsLoading,
            });

            setData(isAuth);
        }

        fetchData();
    }, [currentLang]);

    return {
        isLoading,
        error,
        data,
    };
}
