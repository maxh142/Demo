import { Product } from "../schemas/product";

export type ProductSummary = {
  name: string;
  price: string;
  available: string;
};

export function filterByCategory(products: Product[], category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function filterByMaxPrice(products: Product[], max: number): Product[] {
  return products.filter((p) => p.price <= max);
}

export function filterInStock(products: Product[]): Product[] {
  return products.filter((p) => p.inStock);
}

export function mapToSummary(products: Product[]): ProductSummary[] {
  return products.map((p) => ({
    name: p.name,
    price: `$${p.price.toFixed(2)}`,
    available: p.inStock ? "In Stock" : "Out of Stock",
  }));
}