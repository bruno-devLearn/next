import { FaStar } from "react-icons/fa6";
import { ProductProps } from "@/app/_utils/types";
import Image from "next/image";

export function Card({ product }: { product: ProductProps }) {
    function aplicarDesconto(preco: number, desconto: number) {
        return (preco - preco * (desconto / 100)).toFixed(2);
    }

    return (
        <div className="product-card">
            <div className="product-image-container">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={100}
                    height={100}
                    unoptimized
                    className="product-image"
                />
                <div className="discount-badge">
                    -{Math.floor(product.discountPercentage)}%
                </div>
            </div>
            <div className="product-info">
                <div className="product-header">
                    <div className="product-category">{product.category}</div>
                    <div className="product-rating">
                        <FaStar className="star-icon" />{" "}
                        {product.rating.toFixed(1)}
                    </div>
                </div>
                <div className="product-title">{product.title}</div>
                <div className="product-desc">{product.description}</div>
                <div className="product-footer">
                    <div className="price-section">
                        <div className="original-price">{product.price}</div>
                        <div className="current-price">
                            {aplicarDesconto(
                                product.price,
                                product.discountPercentage
                            )}
                        </div>
                    </div>
                    <div className="stock-text">{product.stock} em estoque</div>
                </div>
            </div>
        </div>
    );
}
