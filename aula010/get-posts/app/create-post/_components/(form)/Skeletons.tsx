import { BiCheckCircle } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";

export function Error() {
    return (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <FiAlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
                <p className="text-red-800">Não foi possivel criar um post</p>
            </div>
        </div>
    );
}

export function Success() {
    return (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <BiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
                <p className="text-green-800">
                    Post criado com sucesso! Redirecionando...
                </p>
            </div>
        </div>
    );
}
