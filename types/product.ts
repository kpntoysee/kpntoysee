export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  brand: string | null;
  short_description: string | null;
  description?: string | null;
  is_featured: boolean;
  is_active: boolean;
};