import { DataProps } from "@/app/_utils/types";
import { Card } from "./Card";
import { Pagination } from "./pagination";
import { Empty } from "./Empty";

export function ProductsSection({ data }: { data: DataProps }) {
    const isEmpty = data.products.length === 0;

    return (
        <div className="products-section">
            <div className="products-header">
                <h2 className="products-title">Produtos</h2>
                <div className="count">{data.total} produtos encontrados</div>
            </div>
            {isEmpty ? (
                <Empty />
            ) : (
                <>
                    <div className="products-grid">
                        {data.products.map((p) => (
                            <Card key={p.id} product={p} />
                        ))}
                    </div>
                    {data.total > 30 ? <Pagination data={data} /> : null}
                </>
            )}
        </div>
    );
}
