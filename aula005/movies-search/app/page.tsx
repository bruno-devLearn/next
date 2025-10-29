import { FavBtn } from "./_components/favbtn";
import { SearchPage } from "./_utils/searchPage";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
            <FavBtn />
            <SearchPage />
        </main>
    );
}
