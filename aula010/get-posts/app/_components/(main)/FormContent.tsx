import { usePosts } from "@/app/_utils/store";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export function FormContent() {
    const { searchValue, setSearch } = usePosts();
    const [inputValue, setInputValue] = useState(() => searchValue ?? "");

    return (
        <form
            className="mb-6"
            onSubmit={(e) => {
                e.preventDefault();
                setSearch(inputValue);
            }}
        >
            <div className="relative">
                <BiSearch className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Pesquisar posts por título..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
            </div>
        </form>
    );
}
