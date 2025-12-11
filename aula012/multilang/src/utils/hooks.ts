import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { isAuthProps, Links, Link } from "./types";
import { getIsAuth } from "./fetchDatas";

// Zustand store para idioma
interface MultiLangProps {
    currentLang: "pt" | "eng";
    setCurrentLang: (newLang: "pt" | "eng") => void;
}

export const useMultiLang = create<MultiLangProps>((set) => ({
    currentLang: "eng",
    setCurrentLang: (newLang) => set({ currentLang: newLang }),
}));

// Hook para obter idioma atual baseado na rota
export function useGetLang() {
    const { currentLang, setCurrentLang } = useMultiLang();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.startsWith("/pt")) {
            setCurrentLang("pt");
        } else if (pathname.startsWith("/en")) {
            setCurrentLang("eng");
        }
    }, [pathname, setCurrentLang]);

    return currentLang;
}

// Hook para autenticação
export function useGetAuth() {
    const currentLang = useGetLang();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<isAuthProps | null>(null);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                const isAuth = await getIsAuth({
                    currentLang,
                    setError,
                    setIsLoading,
                });

                setData(isAuth);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [currentLang]);

    return { isLoading, error, data };
}

// Função auxiliar para links
function getLinks(lang: "pt" | "eng", isAuth: boolean): Links {
    const baseLinks: Link[] =
        lang === "pt"
            ? [
                  { name: "início", url: "/pt/home" },
                  { name: "sobre", url: "/pt/about" },
                  { name: "contato", url: "/pt/contact" },
              ]
            : [
                  { name: "home", url: "/en/home" },
                  { name: "about", url: "/en/about" },
                  { name: "contact", url: "/en/contact" },
              ];

    const extraLink: Link = isAuth
        ? {
              name: "dashboard",
              url: lang === "pt" ? "/pt/dashboard" : "/en/dashboard",
          }
        : { name: "entrar", url: lang === "pt" ? "/pt/login" : "/en/login" };

    return [...baseLinks, extraLink];
}

// Hook para links multilíngues
export function useLinks(): Links {
    const currentLang = useGetLang();
    const { data, error } = useGetAuth();

    if (error) {
    }

    const isAuth = !!data?.isAuth;

    return getLinks(currentLang, isAuth);
}
