import Link from "next/link";
import { LinksComponents } from "./Links";

export function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            className="flex items-center"
                            href="/"
                            data-discover="true"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
                            <span className="ml-2 text-gray-900">
                                MultiLang
                            </span>
                        </Link>
                    </div>
                    <LinksComponents />
                </div>
            </div>
        </header>
    );
}
