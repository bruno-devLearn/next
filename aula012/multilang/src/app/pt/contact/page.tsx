import { ContactForm } from "./components/ContactForm";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-gray-900 mb-6">Entre em Contato</h1>
                    <p className="text-gray-600">
                        Tem alguma dúvida ou sugestão? Entre em contato conosco!
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
