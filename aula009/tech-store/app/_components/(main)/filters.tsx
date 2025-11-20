"use client";

import { useShop } from "@/app/_utils/store";
import { useCategories } from "@/app/_utils/useProducts";
import { useEffect } from "react";

export function Filters() {
    const { selectedCategs, setCategs, searchValue, setSearch } = useShop();
    const { data } = useCategories();

    useEffect(() => {
        if (searchValue) {
            setCategs(["todas"]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const list = data ? data.map((c) => c.slug) : [];
    const categsArray = ["todas", ...list];

    const handleClick = (categ: string) => {
        // clicou em "todas"
        if (categ === "todas" || selectedCategs.length === list.length - 1) {
            setCategs(["todas"]);
            return;
        }

        let newArr = [...selectedCategs];

        if (newArr.includes(categ)) {
            newArr = newArr.filter((c) => c !== categ);
            if (newArr.length === 0) newArr.push("todas");
        } else {
            newArr = newArr.filter((c) => c !== "todas"); // remove "todas"
            newArr.push(categ);
        }

        setCategs(newArr);
        setSearch(undefined);
    };

    return (
        <div className="filters-section">
            <h2 className="categories-title">Categorias</h2>
            <div className="categories-list">
                {categsArray?.map((categ, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(categ)}
                        className={`categ-button ${
                            selectedCategs.includes(categ) ? "active" : null
                        }`}
                    >
                        {categ}
                    </button>
                ))}
            </div>
        </div>
    );
}
