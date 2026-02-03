import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";
import "./styles.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <article className="product-card">
        <div className="image-wrapper">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <span className="category">{product.category}</span>
          <h3>{product.name}</h3>
          <p className="price">
            R$ {product.price.toFixed(2)}
          </p>

          <button>Adicionar ao carrinho</button>
        </div>
      </article>
    </Link>
  );
}
