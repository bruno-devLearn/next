import { MovieProps } from "@/app/_utils/types";
import { Card } from "./Card";

export function Cards({
    movies,
    favorites,
}: {
    movies: MovieProps[] | null;
    favorites: string[];
}) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <p className="text-slate-600">
                    {favorites.length} filme{favorites.length !== 1 && "s"}{" "}
                    favoritado
                    {favorites.length !== 1 && "s"}
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies?.map((movie) => (
                    <Card key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}
