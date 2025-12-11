import { Cookie, Globe, Route, Shield } from "lucide-react";

export function FeaturesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Globe className="lucide lucide-globe w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Suporte a múltiplos idiomas (PT-BR e EN)
                </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Shield className="lucide lucide-shield w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Sistema de autenticação com proteção de rotas
                </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                    <Route className="lucide lucide-route w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Roteamento dinâmico baseado no idioma
                </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                    <Cookie className="lucide lucide-cookie w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Gerenciamento de cookies para persistência
                </p>
            </div>
        </div>
    );
}
