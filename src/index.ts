import { ProductListSchema } from "./schemas/product";
import {
  filterByCategory,
  filterByMaxPrice,
  filterInStock,
  mapToSummary,
} from "./lib/catalog";

import rawData from "./data/products.json";

const products = ProductListSchema.parse(rawData);

console.log("--- All electronics under $80 (in stock only) ---");
const electronics = filterByCategory(products, "electronics");
const affordable = filterByMaxPrice(electronics, 80);
const available = filterInStock(affordable);
console.table(mapToSummary(available));

console.log("\n--- All in-stock stationery ---");
const stationery = filterByCategory(products, "stationery");
const inStockStationery = filterInStock(stationery);
console.table(mapToSummary(inStockStationery));

console.log("\n--- Everything under $50 ---");
const budget = filterByMaxPrice(products, 50);
console.table(mapToSummary(budget));