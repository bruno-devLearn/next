import { GoDatabase } from "react-icons/go";
import { LuSearchX } from "react-icons/lu";

export function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <LuSearchX className="text-gray-400" size={32} />
            </div>
            <h3 className="text-gray-900 mb-2">Nenhum resultado encontrado</h3>
            <p className="text-gray-600 max-w-md">
                Não foi possível encontrar posts para este usuário. Tente outro
                ID.
            </p>
        </div>
    );
}

export function NotSearch() {
    return (
        <div className="text-center py-16">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GoDatabase className="text-blue-600" size={40} />
            </div>
            <h2 className="text-gray-900 mb-2">Bem-vindo ao Posts Explorer</h2>
            <p className="text-gray-600 max-w-md mx-auto">
                Digite o ID de um usuário acima para visualizar seus posts e
                informações. A aplicação consulta a API JSONPlaceholder e
                transforma os dados antes de exibir.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg text-blue-700">
                <GoDatabase size={16} />
                <span>Endpoints utilizados: /users, /posts, /comments</span>
            </div>
        </div>
    );
}
