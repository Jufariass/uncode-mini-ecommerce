import type { Product } from "../types/Product";

type ProductsResponse =
  | Product[]
  | { products: Product[] };

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("/products.json");
  if (!res.ok) throw new Error("Erro ao carregar products.json");

  const data: ProductsResponse = await res.json();

  // aceita os 2 formatos:
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.products)) return data.products;

  throw new Error("Formato inválido em products.json");
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => String(p.id) === String(id)) ?? null;
}
