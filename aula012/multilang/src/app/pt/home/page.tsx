import { FeaturesGrid } from "./components/FeaturesGrid";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-gray-900 mb-6">
                        Bem-vindo ao Desafio Multilíngue
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Um site completo com internacionalização e proteção de
                        rotas
                    </p>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Este projeto demonstra o uso de React Router,
                        gerenciamento de estado, cookies, proteção de rotas e
                        internacionalização (i18n) em uma aplicação React
                        moderna.
                    </p>
                </div>
                <div className="mt-20">
                    <h2 className="text-center text-gray-900 mb-12">
                        Funcionalidades
                    </h2>
                    <FeaturesGrid />
                </div>
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                        <h2 className="mb-4">
                            Um site completo com internacionalização e proteção
                            de rotas
                        </h2>
                        <p className="max-w-2xl mx-auto opacity-90">
                            Este projeto demonstra o uso de React Router,
                            gerenciamento de estado, cookies, proteção de rotas
                            e internacionalização (i18n) em uma aplicação React
                            moderna.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
