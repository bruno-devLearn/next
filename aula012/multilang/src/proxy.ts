import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const cookiesStore = await cookies();

    // Detecta idioma pelo cookie ou pelo path
    let lang = cookiesStore.get("lang")?.value;

    if (pathname.startsWith("/en")) lang = "eng";
    if (pathname.startsWith("/pt")) lang = "pt";

    lang = lang || "eng";
    let response = NextResponse.next();

    // Atualiza cookie de idioma se necessário
    if (pathname.startsWith("/en")) response.cookies.set("lang", "eng");
    if (pathname.startsWith("/pt")) response.cookies.set("lang", "pt");

    const origin = request.nextUrl.origin;

    // Redireciona da raiz para home do idioma detectado
    if (pathname === "/") {
        const langUrl = lang === "eng" ? "en" : "pt";

        response = NextResponse.redirect(`${origin}/${langUrl}/home`);
        response.cookies.set("lang", lang);

        return response;
    }

    // Protege rota dashboard
    if (pathname.endsWith("/dashboard")) {
        const isAuth = cookiesStore.get("auth")?.value;

        if (!isAuth) {
            response = NextResponse.redirect(`${origin}/${lang}/login`);
            response.cookies.set("lang", lang);
            return response;
        }
    }

    return response;
}

export const config = {
    matcher: [
        "/en/:path*",
        "/pt/:path*",
        "/pt/dashboard",
        "/en/dashboard",
        "/",
    ],
};
