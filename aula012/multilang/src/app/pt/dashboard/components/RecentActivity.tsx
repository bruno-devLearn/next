import { Users, FolderKanban, Activity, TrendingUp } from "lucide-react";

const activities = [
    {
        icon: Users,
        text: "Novo usuário cadastrado",
        time: "5 min",
    },
    {
        icon: FolderKanban,
        text: "Projeto atualizado",
        time: "12 min",
    },
    {
        icon: Activity,
        text: "Relatório gerado",
        time: "1 hour",
    },
    {
        icon: TrendingUp,
        text: "Backup realizado",
        time: "3 hours",
    },
];

export function RecentActivity() {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-gray-900 mb-8">Atividade Recente</h2>
            <ul className="divide-y divide-gray-200">
                {activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center gap-4 py-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            {
                                <activity.icon className="w-5 h-5 text-blue-600" />
                            }
                        </div>
                        <div className="flex-1">
                            <div className="text-gray-800">{activity.text}</div>
                            <div className="text-gray-400 text-sm">
                                {activity.time}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
