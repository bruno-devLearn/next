"use client";

import { FiAlertCircle } from "react-icons/fi";

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FiAlertCircle className="text-red-600" size={32} />
            </div>
            <h3 className="text-gray-900 mb-2">Erro ao buscar dados</h3>
            <p className="text-gray-600 max-w-md mb-4">Algo deu errado</p>
            <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Tentar novamente
            </button>
        </div>
    );
}
