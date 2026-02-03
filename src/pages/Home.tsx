import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import type { Product } from "../types/Product";
import { ProductCard } from "../components/ProductCard";
import "./Home.css";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const categories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <main className="page">
        <header className="page-header">
          <h1 className="page-title">Mini E-commerce</h1>
          <p className="page-subtitle">Carregando produtos...</p>
        </header>
      </main>
    );
  }

  return (
    <main className="page">
      
      <header className="page-header">
        <h1 className="page-title">Mini E-commerce</h1>
        <p className="page-subtitle">
          Produtos para devs • {filteredProducts.length} itens
        </p>


        <div className="filters">
           <input
            className="filter-input"
            type="text"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />

         <select
           className="filter-select"
           aria-label="Filtrar por categoria"
           value={category}
           onChange={(e) => setCategory(e.currentTarget.value)}
     >
           <option value="all">Todas</option>

         {categories.map((cat) => (
         <option key={cat} value={cat}>
         {cat}
        </option>
     ))}
     </select>
        </div>
      </header>

      {filteredProducts.length === 0 ? (
        <p style={{ opacity: 0.8 }}>Nenhum produto encontrado.</p>
      ) : (
        <section className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}
