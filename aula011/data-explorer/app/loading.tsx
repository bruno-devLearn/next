import { TbLoader2 } from "react-icons/tb";

export default function LoadingState() {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <TbLoader2 className="text-blue-600 animate-spin mb-4" size={48} />
            <p className="text-gray-600">Buscando dados...</p>
            <p className="text-gray-400 mt-1">
                Consultando API JSONPlaceholder
            </p>
        </div>
    );
}
