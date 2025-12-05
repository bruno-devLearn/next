"use client";

import { useEffect, useState } from "react";
import { SearchArea } from "./_components/SearchArea";
import { getUser } from "./_utils/fetchData";
import { useExplorer } from "./_utils/Store";
import LoadingState from "./loading";
import Error from "./error";

export default function Home() {
    const { id, user, setUser, setError, setLoading, error, loading } =
        useExplorer();

    useEffect(() => {
        async function getData() {
            if (id) {
                try {
                    const newUser = await getUser(id, setError, setLoading);
                    setUser(newUser);
                } catch (error) {
                    console.error("Erro ao buscar usuário:", error);
                }
            }
        }
        getData();
    }, [id, setUser, setError, setLoading]);

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <SearchArea />
            {loading ? <LoadingState /> : null}
            {error ? <Error /> : null}
        </main>
    );
}
