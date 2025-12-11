import { User } from "@/utils/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Função para tratar requisições GET na rota /api/login
export async function GET() {
    // Obtém os cookies da requisição
    const cookieStore = await cookies();

    // Recupera o idioma do cookie ou define 'eng' como padrão
    const lang = cookieStore.get("lang")?.value || "eng";
    // Verifica se o usuário está autenticado pelo cookie 'auth'
    const isAuth = cookieStore.get("auth")?.value === "true";

    // Se não estiver autenticado, retorna mensagem de erro no idioma correto
    if (!isAuth) {
        return NextResponse.json(
            { message: lang === "eng" ? "not logged in" : "não logado" },
            { status: 401 }
        );
    }

    // Se autenticado, retorna status 200 e o estado de autenticação
    return NextResponse.json({ isAuth }, { status: 200 });
}

// Função para tratar requisições POST na rota /api/login
export async function POST(request: NextRequest) {
    // Obtém os cookies da requisição
    const cookieStore = await cookies();

    // Recupera o idioma do cookie ou define 'eng' como padrão
    const lang = cookieStore.get("lang")?.value || "eng";
    const isEng = lang === "eng";

    try {
        // Tenta obter os dados do usuário enviados no corpo da requisição
        const user = (await request.json()) as User;

        // Valida se os campos obrigatórios foram preenchidos
        if (!user.email || !user.password) {
            return NextResponse.json(
                {
                    message: isEng
                        ? "Please fill in all fields"
                        : "Por favor, preencha todos os campos.",
                },
                { status: 400 }
            );
        }

        // Cria resposta de sucesso e define cookies de sessão e autenticação
        const response = NextResponse.json(
            {
                message: isEng
                    ? "successfully logged in"
                    : "logado com sucesso",
            },
            { status: 200 }
        );

        response.cookies.set("session", JSON.stringify(user));
        response.cookies.set("auth", "true");

        return response;
    } catch (error) {
        // Trata erros conhecidos e desconhecidos, retornando mensagem adequada
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: isEng
                        ? "It was not possible to start the session"
                        : "Não foi possível iniciar a sessão",
                },
                { status: 500 }
            );
        } else {
            return NextResponse.json(
                {
                    message: isEng ? "unknown error" : "erro desconhecido",
                },
                { status: 500 }
            );
        }
    }
}
