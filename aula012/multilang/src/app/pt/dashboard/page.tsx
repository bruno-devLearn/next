import { RecentActivity } from "./components/RecentActivity";
import { StatsGrid } from "./components/StatsGrid";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-gray-900 mb-2">Dashboard Protegido</h1>
                    <p className="text-gray-600">
                        Esta é uma página protegida que só pode ser acessada
                        após autenticação.
                    </p>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
                    <h2 className="mb-2">Bem-vindo ao painel!</h2>
                    <p className="opacity-90">
                        Esta é uma página protegida que só pode ser acessada
                        após autenticação.
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-gray-900 mb-6">Estatísticas</h2>
                    <StatsGrid />
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-gray-900 mb-6">Atividade Recente</h2>
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
}
