import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/_utils/types";
import { cookies } from "next/headers";

/**
 * Rota POST para autenticação de usuários.
 *
 * Realiza o login do usuário, validando os campos obrigatórios e criando
 * cookies de sessão para manter o estado de autenticação.
 *
 * @param {NextRequest} request - Objeto da requisição contendo os dados do usuário no body
 * @returns {Promise<NextResponse>} Resposta com status 200 em caso de sucesso ou 400 em caso de erro
 *
 * @example
 * // Body da requisição
 * {
 *   "email": "usuario@exemplo.com",
 *   "password": "senha123"
 * }
 *
 * @description
 * Fluxo de autenticação:
 * 1. Obtém o idioma preferido do cookie 'lang' (padrão: 'eng')
 * 2. Extrai os dados do usuário do body da requisição
 * 3. Valida se email e password foram fornecidos
 * 4. Cria cookie 'auth' para indicar status de autenticação
 * 5. Cria cookie 'session' com os dados do usuário (httpOnly para segurança)
 *
 * @see {@link User} para estrutura dos dados do usuário
 */
export async function POST(request: NextRequest) {
    // Obtém o idioma preferido do usuário através do cookie; usa 'eng' como fallback
    const lang = (await cookies()).get("lang")?.value || "eng";

    // Extrai e tipifica os dados do usuário do body da requisição
    const user = (await request.json()) as User;

    // Validação dos campos obrigatórios: email e password
    if (!user || !user.email || !user.password) {
        return NextResponse.json(
            {
                message:
                    lang === "eng"
                        ? "Please, fill in all fields"
                        : "Por favor, preencha todos os campos.",
            },
            { status: 400 }
        );
    }

    // Inicializa a resposta de sucesso
    const response = NextResponse.json({}, { status: 200 });

    // Cookie de autenticação (httpOnly: false permite acesso via JavaScript no client)
    response.cookies.set("auth", "true", {
        httpOnly: false,
        sameSite: "strict",
        path: "/",
    });

    // Cookie de sessão com dados do usuário (httpOnly: true previne acesso via XSS)
    response.cookies.set("session", JSON.stringify(user), {
        httpOnly: true,
        sameSite: "strict",
        path: "/",
    });

    return response;
}

/**
 * Rota GET para verificação de sessão ativa.
 *
 * Verifica se existe uma sessão ativa e retorna os dados do usuário logado.
 *
 * @returns {Promise<NextResponse>}
 * - Status 200 com dados do usuário se autenticado
 * - Status 400 se não houver sessão ativa
 *
 * @example
 * // Resposta de sucesso (200)
 * {
 *   "user": {
 *     "email": "usuario@exemplo.com",
 *     "password": "senha123"
 *   }
 * }
 *
 * @description
 * Fluxo de verificação:
 * 1. Verifica a existência do cookie 'auth'
 * 2. Se autenticado, obtém os dados do cookie 'session'
 * 3. Faz parse dos dados JSON do usuário
 * 4. Retorna os dados do usuário
 * 5. Caso contrário, retorna erro 400
 *
 * @security
 * O cookie 'session' é httpOnly, então só pode ser acessado pelo servidor.
 * O cookie 'auth' é usado para verificação client-side do estado de login.
 */
export async function GET() {
    // Verifica o status de autenticação através do cookie 'auth'
    const isAuth = (await cookies()).get("auth")?.value as boolean;

    // Se o usuário está autenticado, busca e retorna os dados da sessão
    if (isAuth) {
        const userCookie = (await cookies()).get("session")?.value;
        console.log(userCookie);

        if (userCookie) {
            // Deserializa os dados do usuário armazenados em JSON
            const user = JSON.parse(userCookie);
            return NextResponse.json({ user }, { status: 200 });
        }
    }

    // Retorna erro se não houver sessão ativa
    return NextResponse.json({}, { status: 400 });
}
