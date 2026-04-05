import { getAllProducts } from "@/lib/queries";
import ShopClient from "@/components/ShopClient";

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const products = await getAllProducts();
  const { category } = await searchParams;

  return <ShopClient products={products} initialCategory={category || "All"} />;
}