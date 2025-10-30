"use client";

import { useFav } from "@/app/_utils/favorites";
import { DataProps } from "@/app/_utils/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PageBtn } from "./PageBtn";

export function Pages({ movies }: { movies: DataProps }) {
    const { index, updateIndex } = useFav();
    const totalIndex = Math.ceil(Number(movies.totalResults) / 10);

    // gera lista de páginas a exibir
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalIndex <= maxVisible + 2) {
            // poucas páginas → mostra todas
            for (let i = 1; i <= totalIndex; i++) pages.push(i);
            return pages;
        }

        const start = Math.max(2, index - 2);
        const end = Math.min(totalIndex - 1, index + 2);

        pages.push(1); // sempre mostra 1

        if (start > 2) pages.push("..."); // se há gap entre 1 e início

        for (let i = start; i <= end; i++) pages.push(i);

        if (end < totalIndex - 1) pages.push("..."); // se há gap antes do último

        pages.push(totalIndex); // sempre mostra o último
        return pages;
    };

    const handlePrev = () => {
        if (index > 1) updateIndex(index - 1);
    };

    const handleNext = () => {
        if (index < totalIndex) updateIndex(index + 1);
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="mt-12">
            <nav className="mx-auto flex w-full justify-center">
                <ul className="flex flex-row items-center gap-1">
                    <PageBtn onClick={handlePrev}>
                        <FaChevronLeft className="lucide lucide-chevron-left" />
                        <span className="hidden sm:block">Previous</span>
                    </PageBtn>

                    {pageNumbers.map((p, i) =>
                        p === "..." ? (
                            <PageBtn key={`dots-${i}`}>...</PageBtn>
                        ) : (
                            <PageBtn
                                key={p}
                                index={index}
                                onClick={() => updateIndex(p as number)}
                            >
                                {p}
                            </PageBtn>
                        )
                    )}

                    <PageBtn onClick={handleNext}>
                        <span className="hidden sm:block">Next</span>
                        <FaChevronRight className="lucide lucide-chevron-right" />
                    </PageBtn>
                </ul>
            </nav>
        </div>
    );
}
