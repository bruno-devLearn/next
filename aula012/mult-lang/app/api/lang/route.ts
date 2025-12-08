import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const currentLang = (await cookies()).get("lang")?.value || "eng";

    try {
        const body = await request.json();
        const langReq = body.lang as string;

        if (!langReq) {
            throw new Error(
                currentLang === "eng"
                    ? "It was not possible to update the language"
                    : "Não foi possível atualizar o idioma."
            );
        }

        const response = NextResponse.json({}, { status: 200 });
        response.cookies.set("lang", langReq);

        return response;
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : currentLang === "eng"
                        ? "internal server error"
                        : "Erro Interno do Servidor",
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    const lang = (await cookies()).get("lang")?.value || "eng";

    if (!lang) {
        return NextResponse.json(
            {},
            {
                status: 500,
            }
        );
    }

    return NextResponse.json({ lang });
}
