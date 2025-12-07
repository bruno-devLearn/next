import { SearchArea } from "./_components/SearchArea";
import { MainContent } from "./_components/MainContent";

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <SearchArea />
            <MainContent />
        </main>
    );
}
