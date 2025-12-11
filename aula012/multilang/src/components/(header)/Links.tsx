"use client";

import { usePathname, useRouter } from "next/navigation";
import { useGetLang, useLinks } from "@/utils/hooks";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function LinksComponents() {
    const [select, setSelect] = useState("");

    const lang = useGetLang();
    const router = useRouter();

    const pathname = usePathname();
    const linksObj = useLinks();

    useEffect(() => {
        setSelect(pathname);
    }, [pathname]);

    return (
        <div className="hidden md:flex md:items-center md:gap-8">
            {linksObj.map((link, i) => (
                <Link
                    key={i}
                    onClick={() => setSelect(link.url)}
                    className={`transition-colors  ${
                        select === link.url
                            ? "text-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                    }`}
                    href={link.url}
                    data-discover="true"
                >
                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </Link>
            ))}

            <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Switch language"
                onClick={() => {
                    const newLang = pathname.startsWith("/en") ? "/pt" : "/en";

                    const restOfPath = pathname.replace(/^\/(en|pt)/, "");
                    router.push(newLang + (restOfPath || "/home"));
                }}
            >
                <Globe className="lucide lucide-globe w-4 h-4" />
                <span>{lang === "eng" ? "EN" : "PT"}</span>
            </button>
        </div>
    );
}
