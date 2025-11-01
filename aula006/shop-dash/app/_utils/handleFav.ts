export function handleClick({
    id,
    isIncludes,
    favorites,
    updateFav,
}: {
    id: string;
    isIncludes: boolean;
    favorites: string[];
    updateFav: (newArray: string[]) => void;
}) {
    const newArray = isIncludes
        ? favorites.filter((p) => p !== id)
        : [...favorites, id];

    updateFav(newArray);
}
