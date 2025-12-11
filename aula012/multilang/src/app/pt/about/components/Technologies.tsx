import { Code, Palette, Zap, Users } from "lucide-react";

export function Technologies() {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-gray-900 mb-8">Tecnologias Utilizadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Code className="lucide lucide-code w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">React with TypeScript</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Zap className="lucide lucide-zap w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">
                        React Router para navegação
                    </span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Palette className="lucide lucide-palette w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">
                        Tailwind CSS para estilização
                    </span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Users className="lucide lucide-users w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">
                        Context API para gerenciamento de estado
                    </span>
                </div>
            </div>
        </div>
    );
}
