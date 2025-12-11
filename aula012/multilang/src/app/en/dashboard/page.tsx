import { RecentActivity } from "./components/RecentActivity";
import { StatsGrid } from "./components/StatsGrid";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-gray-900 mb-2">Protected Dashboard</h1>
                    <p className="text-gray-600">
                        This is a protected page that can only be accessed after
                        authentication.
                    </p>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
                    <h2 className="mb-2">Welcome to the panel!</h2>
                    <p className="opacity-90">
                        This is a protected page that can only be accessed after
                        authentication.
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-gray-900 mb-6">Statistics</h2>
                    <StatsGrid />
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-gray-900 mb-6">Recent Activity</h2>
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
}
