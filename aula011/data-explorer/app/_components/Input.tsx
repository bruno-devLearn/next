import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export function Input() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="flex-1 relative">
            <input
                type="number"
                name="searchValue"
                min="1"
                placeholder="Digite o ID do usuário (1-10)"
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchValue}
                onChange={(e) => {
                    const text = e.target.value.trim();
                    setSearchValue(text);
                }}
            />
            <BiSearch className="lucide lucide-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
    );
}
