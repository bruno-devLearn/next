import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { usePosts } from "../_utils/store";

export function Pagination() {
    const { totalPages, page, setPage } = usePosts();

    const handleClick = (pg: number) => {
        setPage(pg);
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <button
                onClick={() => handleClick(page - 1)}
                disabled={page === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
                <BiChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum: number;
                    if (totalPages <= 5) {
                        pageNum = i + 1;
                    } else if (page <= 3) {
                        pageNum = i + 1;
                    } else if (page >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                    } else {
                        pageNum = page - 2 + i;
                    }

                    return (
                        <button
                            key={pageNum}
                            onClick={() => {
                                if (page === pageNum) return;
                                handleClick(pageNum);
                            }}
                            className={`w-10 h-10 rounded-lg transition-colors ${
                                page === pageNum
                                    ? "bg-blue-600 text-white"
                                    : "border border-gray-300 hover:bg-gray-50 cursor-pointer"
                            }`}
                        >
                            {pageNum}
                        </button>
                    );
                })}
            </div>

            <button
                onClick={() => handleClick(page + 1)}
                disabled={page === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
                <BiChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
