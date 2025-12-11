import { LogIn } from "lucide-react";
import { LoginForm } from "./components/LoginForm";

export default function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <LogIn
                                className="w-8 h-8 text-white"
                                aria-hidden="true"
                            />
                        </div>
                        <h1 className="text-gray-900 mb-2">Login</h1>
                        <p className="text-gray-600">
                            Enter your credentials to access the dashboard
                        </p>
                    </div>
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-blue-800">
                            Use any email and password to login (demo)
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
