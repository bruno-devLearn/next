import { Technologies } from "./components/Technologies";
import { Challenges } from "./components/Challenges";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-gray-900 mb-6">Sobre o Projeto</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Este é um desafio técnico que simula requisitos reais de
                        processos seletivos. O objetivo é demonstrar habilidades
                        em desenvolvimento front-end moderno.
                    </p>
                </div>
                <Technologies />
                <Challenges />
            </div>
        </div>
    );
}
