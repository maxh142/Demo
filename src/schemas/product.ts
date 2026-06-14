import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  price: z.number().positive(),
  category: z.enum(["electronics", "furniture", "stationery"]),
  inStock: z.boolean(),
});

export const ProductListSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;