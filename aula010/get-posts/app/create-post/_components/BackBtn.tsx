"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";

export function BackBtn() {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-150 cursor-pointer hover:bg-gray-100 rounded-md px-2 py-1"
        >
            <BsArrowLeftShort className="w-5 h-5" />
            Voltar
        </button>
    );
}
