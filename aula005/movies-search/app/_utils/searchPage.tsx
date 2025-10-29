"use client";

import { FiFilm } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useFav } from "./favorites";

export function SearchPage() {
    const { inputValue, updateInput } = useFav();

    return (
        <div className="w-full max-w-2xl">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-900 mb-6">
                    <FiFilm className="lucide lucide-film w-10 h-10 text-white" />
                </div>
                <h1 className="mb-4">Buscador de Filmes</h1>
                <p className="text-slate-600">
                    Pesquise por milhares de filmes e séries
                </p>
            </div>
            <form className="relative">
                <div className="relative">
                    <CiSearch className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => updateInput(e.target.value)}
                        placeholder="Digite o nome de um filme..."
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-12 pr-4 py-6 text-lg"
                    />
                </div>
                <button
                    disabled={inputValue === "" ? true : false}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full mt-4"
                >
                    Pesquisar
                </button>
            </form>
            <div className="mt-8 text-center text-sm text-slate-500">
                <p>
                    Experimente pesquisar por &quot;Spider&quot;,
                    &quot;Batman&quot; ou &quot;Star Wars&quot;
                </p>
            </div>
        </div>
    );
}
