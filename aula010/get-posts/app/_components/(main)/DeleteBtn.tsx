"use client";

import { useDeletePost } from "@/app/_utils/hooks";
import { BiTrash } from "react-icons/bi";
import { TbLoader2 } from "react-icons/tb";

export function DeleteBtn({ id }: { id: number }) {
    const { mutate, isPending } = useDeletePost();

    return (
        <button
            className="cursor-pointer p-2 rounded-lg border border-gray-300 hover:bg-red-50 transition-colors disabled:opacity-50"
            title="Deletar post"
            onClick={() => mutate(id)}
        >
            {isPending ? (
                <TbLoader2 className="w-4 h-4 animate-spin text-red-600" />
            ) : (
                <BiTrash className="lucide lucide-trash2 lucide-trash-2 w-4 h-4 text-red-600" />
            )}
        </button>
    );
}
