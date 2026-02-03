import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Product } from "../types/Product";
import { getProductById } from "../services/products";
import { useCart } from "../contexts/CartContext";
import "./Product.css";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { add } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError(null);

        if (!id) {
          setProduct(null);
          setError("ID do produto não informado.");
          return;
        }

        const data = await getProductById(id);

        if (!data) {
          setProduct(null);
          setError("Produto não encontrado.");
          return;
        }

        setProduct(data);
      } catch (e) {
        setError("Erro ao carregar produto.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) return <p>Carregando produto...</p>;

  if (error) {
    return (
      <main className="product-page">
        <p>{error}</p>
        <Link to="/">Voltar para Home</Link>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="product-page">
        <p>Produto não encontrado</p>
        <Link to="/">Voltar para Home</Link>
      </main>
    );
  }

  return (
    <main className="product-page">
      <Link to="/" className="back-link">
        ← Voltar
      </Link>

      <div className="product-layout">
        <div className="product-media">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-content">
          <h1 className="product-title">{product.name}</h1>

          <p className="product-price">R$ {product.price.toFixed(2)}</p>

          <p className="product-description">{product.description}</p>

          <button className="product-button" onClick={() => add(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  );
}
