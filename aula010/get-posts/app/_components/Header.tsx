export function Header() {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-gray-900">Gerenciador de Posts</h1>
                        <p className="text-gray-600 mt-1">API: ApiMocker</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span>Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
