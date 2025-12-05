import { GoDatabase } from "react-icons/go";

export function Header() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex items-center gap-3 mb-2">
                    <GoDatabase className="text-blue-600" size={32} />
                    <h1 className="text-gray-900">API Posts Explorer</h1>
                </div>
                <p className="text-gray-600">
                    Desafio: Consumo de API JSONPlaceholder com transformação de
                    dados
                </p>
            </div>
        </header>
    );
}
