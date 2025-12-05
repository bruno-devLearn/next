"use client";

import { useExplorer } from "../_utils/Store";
import { Input } from "./Input";

export function SearchArea() {
    const { setId } = useExplorer();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const id = formData.get("searchValue") as string;
        setId(!id ? undefined : id);
    }

    return (
        <div className="mb-8 flex justify-center">
            <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    <Input />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                        Buscar
                    </button>
                </div>
                <p className="mt-2 text-gray-600">
                    Dica: Use IDs de 1 a 10 para testar com a API
                    JSONPlaceholder
                </p>
            </form>
        </div>
    );
}
