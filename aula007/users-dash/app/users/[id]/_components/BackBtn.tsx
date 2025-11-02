import { IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";

export function BackBtn() {
    return (
        <Link href="/">
            <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 mb-6"
            >
                <IoArrowBackSharp className="lucide lucide-arrow-left mr-2 h-4 w-4" />
                Back to Users
            </button>
        </Link>
    );
}
