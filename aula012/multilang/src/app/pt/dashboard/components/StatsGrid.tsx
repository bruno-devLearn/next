import { Users, Eye, FolderKanban, DollarSign } from "lucide-react";

const stats = [
    {
        icon: Users,
        iconClass: "bg-gradient-to-br from-blue-500 to-cyan-500",
        value: "2,543",
        label: "Usuários Ativos",
        change: "+12%",
    },
    {
        icon: Eye,
        iconClass: "bg-gradient-to-br from-purple-500 to-pink-500",
        value: "45,678",
        label: "Visualizações",
        change: "+8%",
    },
    {
        icon: FolderKanban,
        iconClass: "bg-gradient-to-br from-orange-500 to-red-500",
        value: "127",
        label: "Projetos",
        change: "+23%",
    },
    {
        icon: DollarSign,
        iconClass: "bg-gradient-to-br from-green-500 to-emerald-500",
        value: "$89,432",
        label: "Receita",
        change: "+15%",
    },
];

export function StatsGrid() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center"
                    >
                        <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${stat.iconClass}`}
                        >
                            {<stat.icon className="w-6 h-6 text-white" />}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {stat.value}
                        </div>
                        <div className="text-gray-500">{stat.label}</div>
                        <div className="text-green-600 font-semibold mt-2">
                            {stat.change}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
// Removido export duplicado de StatsGrid
