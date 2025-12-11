import { FeaturesGrid } from "./components/FeaturesGrid";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-gray-900 mb-6">
                        Welcome to Multilingual Challenge
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        A complete site with internationalization and route
                        protection
                    </p>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        This project demonstrates the use of React Router, state
                        management, cookies, route protection, and
                        internationalization (i18n) in a modern React
                        application.
                    </p>
                </div>
                <div className="mt-20">
                    <h2 className="text-center text-gray-900 mb-12">
                        Features
                    </h2>
                    <FeaturesGrid />
                </div>
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                        <h2 className="mb-4">
                            A complete site with internationalization and route
                            protection
                        </h2>
                        <p className="max-w-2xl mx-auto opacity-90">
                            This project demonstrates the use of React Router,
                            state management, cookies, route protection, and
                            internationalization (i18n) in a modern React
                            application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
