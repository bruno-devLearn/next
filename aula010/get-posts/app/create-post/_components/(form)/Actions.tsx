import { useRouter } from "next/navigation";
import { TbLoader2 } from "react-icons/tb";

export function Actions({ isPending }: { isPending: boolean }) {
    const router = useRouter();

    return (
        <div className="flex gap-3">
            <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
                {isPending ? (
                    <>
                        <TbLoader2 className="w-5 h-5 animate-spin" />
                        Salvando...
                    </>
                ) : (
                    "Criar Post"
                )}
            </button>
            <button
                onClick={() => router.push("/")}
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
                Cancelar
            </button>
        </div>
    );
}
