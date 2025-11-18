"use client";

import { useCategories } from "@/app/_utils/useProducts";

export function Filters() {
    const { data } = useCategories();

    const list = data ? data.map((c) => c.slug) : [];
    const categsArray = ["todas", ...list];

    return (
        <div className="filters-section">
            <h2 className="categories-title">Categorias</h2>
            <div className="categories-list">
                {categsArray?.map((categ, i) => (
                    <button className="categ-button" key={i}>
                        {categ}
                    </button>
                ))}
            </div>
        </div>
    );
}
