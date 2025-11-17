"use client";

import { useShop } from "@/app/_utils/store";
import { useProducts } from "@/app/_utils/useProducts";

export function MainContent() {
    const { searchValue, globalId } = useShop();

    return <div className="main-content">{/* teste*/}</div>;
}
