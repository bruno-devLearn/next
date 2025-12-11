import { Cookie, Globe, Route, Shield } from "lucide-react";

export function FeaturesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Globe className="lucide lucide-globe w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Multi-language support (PT-BR and EN)
                </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Shield className="lucide lucide-shield w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Authentication system with route protection
                </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                    <Route className="lucide lucide-route w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Dynamic routing based on language
                </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                    <Cookie className="lucide lucide-cookie w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Cookie management for persistence
                </p>
            </div>
        </div>
    );
}
