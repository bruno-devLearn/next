import { ActionsSection } from "./actions-secttion";
import { LogoSection } from "./logo-section";
import { SearchSection } from "./search-section";
import "./header.css";

export function Header() {
    return (
        <header>
            <div className="header-container">
                <LogoSection />
                <SearchSection />
                <ActionsSection />
            </div>
        </header>
    );
}
