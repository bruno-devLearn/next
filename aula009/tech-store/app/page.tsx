import { Header } from "./_components/(header)/header";
import { MainContent } from "./_components/(main)/main-content";

export default function Home() {
    return (
        <div className="app-container">
            <Header />
            <MainContent />
        </div>
    );
}
