"use client";

import { setAuth } from "@/utils/fetchDatas";
import { useGetLang } from "@/utils/hooks";
import { User } from "@/utils/types";
import { Mail, Lock } from "lucide-react";
import { FormEvent, useState } from "react";

export function LoginForm() {
    const currentLang = useGetLang();

    const [error, setError] = useState("");

    const handleSubit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const user: User = {
            email,
            password,
        };

        async function fetchData() {
            await setAuth({ currentLang, user, setError });
        }

        fetchData();
    };

    return (
        <form className="space-y-6" onSubmit={(e) => handleSubit(e)}>
            <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                    Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
                Login
            </button>
        </form>
    );
}
