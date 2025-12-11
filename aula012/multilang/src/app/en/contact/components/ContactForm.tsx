import { Mail, User, MessageSquare, Send } from "lucide-react";

export function ContactForm() {
    return (
        <form className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="lucide lucide-user w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="off"
                        placeholder="Your full name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="lucide lucide-mail w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="off"
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                </label>
                <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Type your messagem here"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center gap-2"
            >
                <Send className="w-5 h-5" /> Send Message
            </button>
        </form>
    );
}
