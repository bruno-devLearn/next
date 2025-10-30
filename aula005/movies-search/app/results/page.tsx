"use client";

import { useFav } from "../_utils/favorites";
import { Cards } from "./_components/Cards";

export default function Page() {
    const { inputValue } = useFav();

    return <Cards inputValue={inputValue} />;
}
