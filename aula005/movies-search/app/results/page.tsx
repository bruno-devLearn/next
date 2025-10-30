"use client";

import { useFav } from "../_utils/favorites";
import { Cards } from "./_components/Cards";
import { TopBar } from "./_components/topBar";

export default function Page() {
    const { inputValue } = useFav();

    return (
        <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
            <TopBar />
            <Cards inputValue={inputValue} />
        </div>
    );
}
