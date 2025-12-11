export function Challenges() {
    return (
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="mb-8">Implemented Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span>1</span>
                    </div>
                    <span className="leading-relaxed">
                        Complete internationalization system
                    </span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span>2</span>
                    </div>
                    <span className="leading-relaxed">
                        Middleware logic for redirects
                    </span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span>3</span>
                    </div>
                    <span className="leading-relaxed">
                        Protected routes with authentication
                    </span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span>4</span>
                    </div>
                    <span className="leading-relaxed">
                        Responsive and modern design
                    </span>
                </div>
            </div>
        </div>
    );
}
