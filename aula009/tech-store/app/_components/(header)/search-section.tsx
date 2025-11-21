"use client";

import { useShop } from "@/app/_utils/store";
import { CiSearch } from "react-icons/ci";

export function SearchSection() {
    const { setSearch, searchValue } = useShop();

    return (
        <div className="search-section">
            <CiSearch className="search-icon" />
            <input
                type="text"
                className="search-input"
                placeholder="Buscar produtos..."
                value={searchValue ?? ""}
                onChange={(e) => {
                    const search = e.target.value.trim();

                    if (!search) {
                        setSearch(undefined);
                    } else {
                        setSearch(search);
                    }
                }}
            />
        </div>
    );
}
