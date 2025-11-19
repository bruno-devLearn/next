"use client";

import { useShop } from "@/app/_utils/store";
import { useCategories } from "@/app/_utils/useProducts";

export function Filters() {
    const { selectedCategs, setCategs } = useShop();
    const { data } = useCategories();

    const list = data ? data.map((c) => c.slug) : [];
    const categsArray = ["todas", ...list];

    const handleClick = (categ: string) => {
        // clicou em "todas"
        if (categ === "todas" || selectedCategs.length === list.length - 1) {
            setCategs(["todas"]);
            return;
        }

        // caso contrário, categoria normal
        let newArr = [...selectedCategs];

        // se já tem, remove
        if (newArr.includes(categ)) {
            newArr = newArr.filter((c) => c !== categ);
            if (newArr.length === 0) newArr.push("todas");
        } else {
            // se não tem, adiciona
            newArr = newArr.filter((c) => c !== "todas"); // remove "todas"
            newArr.push(categ);
        }

        setCategs(newArr);
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
