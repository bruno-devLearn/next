"use client";

import { useShop } from "@/app/_utils/store";

export function Pagination({ data }: { data: DataProps }) {
    const { indexPage, setIndex } = useShop();

    const totalPages = Math.ceil((data?.total ?? 0) / 30);
    const pagesArr = [];

    for (let i = 1; i <= totalPages; i++) {
        pagesArr.push(i);
    }

    function changeIndex(i: number) {
        setIndex(i);
        window.scrollTo(0, 0);
    }

    return (
        <div className="pagination">
            <button
                disabled={indexPage === 0}
                className="page-btn"
                onClick={() => changeIndex(indexPage - 1)}
            >
                Anterior
            </button>

            <div className="page-numbers">
                {pagesArr.map((page, i) => (
                    <button
                        onClick={() => changeIndex(i)}
                        className={`page-number ${
                            indexPage === i ? "active" : null
                        }`}
                        key={i}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                disabled={indexPage === totalPages - 1}
                className="page-btn"
                onClick={() => changeIndex(indexPage + 1)}
            >
                Proxima
            </button>
        </div>
    );
}
