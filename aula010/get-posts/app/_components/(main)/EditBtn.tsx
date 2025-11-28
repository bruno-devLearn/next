"use client";

import { useRouter } from "next/navigation";
import { FiEdit2 } from "react-icons/fi";

export function EditBtn({ id }: { id: number }) {
    const router = useRouter();

    return (
        <button
            className="cursor-pointer p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            title="Editar post"
            onClick={() => router.push(`/edit/${id}`)}
        >
            <FiEdit2 className="lucide lucide-pen w-4 h-4 text-blue-600" />
        </button>
    );
}
