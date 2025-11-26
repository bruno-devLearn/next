"use client";

import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

export default function Error() {
    return (
        <div className="h-full py-50 flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-red-100 rounded-full p-4">
                        <FiAlertTriangle className="w-12 h-12 text-red-600" />
                    </div>
                </div>
                <h2 className="text-red-600 mb-4">Algo deu errado!</h2>
                <p className="text-gray-600 mb-6">
                    Ocorreu um erro inesperado. Por favor, tente novamente.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                    <FiRefreshCw className="w-4 h-4" />
                    Tentar novamente
                </button>
            </div>
        </div>
    );
}
