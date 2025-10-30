"use client";

import { useFav } from "@/app/_utils/favorites";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "@/app/_utils/fetch";
import { MovieProps } from "@/app/_utils/types";
import { TopBar } from "./_components/TopBar";
import { FavBtn } from "./_components/FavBtn";
import { MovieInfo } from "./_components/MovieInfo";
import { FaStar } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import Image from "next/image";

export default function Page() {
    const { index, favorites, updateFav } = useFav();
    const params = useParams();
    const [data, setData] = useState<MovieProps | null>(null);

    const id = params.movie; // pega direto o slug

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                const result = await getData(`i=${id}`, index);
                setData(result);
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
            }
        };

        fetchData();
    }, [id, index]);

    const add = () => {
        const favArray = favorites;
        favArray.push(data?.imdbID);
        updateFav(favArray);
    };

    const remove = () => {
        const favArray = favorites.filter((favId) => favId !== data.imdbID);
        updateFav(favArray);
    };

    return (
        <div className="min-h-screen bg-white">
            <TopBar />
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-md relative aspect-[2/3]">
                            {data?.Poster && data.Poster !== "N/A" && (
                                <Image
                                    src={data.Poster}
                                    alt={data.Title}
                                    width={600} // largura real que quer exibir
                                    height={900} // altura real que quer exibir
                                    className="w-full h-full rounded-xl shadow-xl object-cover"
                                    quality={100} // máxima qualidade
                                    priority
                                />
                            )}

                            <FavBtn
                                onClick={
                                    favorites.includes(data?.imdbID)
                                        ? remove
                                        : add
                                }
                                favorites={favorites}
                                id={data?.imdbID}
                            />
                        </div>
                    </div>
                    <div className="space-y-8">
                        <MovieInfo data={data} />
                        <div className="flex items-center gap-8 py-6 border-y">
                            <div className="flex items-center gap-3">
                                <FaStar className="lucide lucide-star w-8 h-8 text-yellow-500 fill-yellow-500" />
                                <div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl">
                                            {data?.Ratings[0].Value.slice(
                                                0,
                                                data?.Ratings[0].Value.indexOf(
                                                    "/"
                                                )
                                            )}
                                        </span>
                                        <span className="text-slate-400">
                                            /10
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500">
                                        {data?.Ratings[2]?.Value.slice(
                                            data.Ratings[2].Value.indexOf("/")
                                        )}
                                        ,000 Votos
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:flex gap-6 flex-1">
                                {data?.Ratings.map((rating, i) =>
                                    i < 2 ? (
                                        <div key={i}>
                                            <p className="text-xs text-slate-500 mb-0.5">
                                                {rating.Source}
                                            </p>
                                            <p className="text-sm">
                                                {rating.Value}
                                            </p>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-3">Sinopse</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {data?.Plot}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <IoVideocamOutline className="lucide lucide-video w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">
                                        Direção
                                    </p>
                                    <p>{data?.Director}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <FiUser className="lucide lucide-user w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">
                                        Elenco Principal
                                    </p>
                                    <p>{data?.Actors}</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t pt-6">
                            <h3 className="mb-4">Detalhes</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                                <div>
                                    <p className="text-slate-500 mb-1">
                                        Lançamento
                                    </p>
                                    <p>{data?.Released}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 mb-1">
                                        Idioma
                                    </p>
                                    <p>{data?.Language}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 mb-1">País</p>
                                    <p>{data?.Country}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-slate-500 mb-1">
                                        Roteiro
                                    </p>
                                    <p>{data?.Writer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
