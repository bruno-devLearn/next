import { FaRegHeart, FaHeart } from "react-icons/fa";

interface FavBtnProps {
    favorites: string[];
    id: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function FavBtn({ favorites, id, onClick }: FavBtnProps) {
    return (
        <button
            onClick={onClick}
            className={`
    inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium 
    transition-all disabled:pointer-events-none disabled:opacity-50 
    [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 
    outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive 
    h-10 rounded-md px-6 has-[>svg]:px-4 w-full mt-6 cursor-pointer
    ${
        favorites.includes(id)
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
    }
  `}
        >
            <span className="inline-flex items-center gap-2">
                {favorites.includes(id) ? (
                    <>
                        <FaHeart className="lucide lucide-heart w-5 h-5 fill-current" />
                        Remover dos Favoritos
                    </>
                ) : (
                    <>
                        <FaRegHeart className="lucide lucide-heart w-5 h-5" />
                        Adicionar aos Favoritos
                    </>
                )}
            </span>
        </button>
    );
}
