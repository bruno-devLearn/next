import { CiSearch } from "react-icons/ci";

export function SearchSection() {
    return (
        <div className="search-section">
            <CiSearch className="search-icon" />
            <input
                type="text"
                className="search-input"
                placeholder="Buscar produtos..."
            />
        </div>
    );
}
