import type { Product } from "../types/Product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("/products.json");
  if (!res.ok) throw new Error("Erro ao carregar products.json");
  return res.json();
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => String(p.id) === String(id)) ?? null;
}
