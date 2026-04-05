"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
  initialCategory?: string;
};

export default function ShopClient({
  products,
  initialCategory = "All",
}: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const categories = ["All", "RC", "Die Cast", "Construction", "Aircraft"];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const name = p.name.toLowerCase();
      const brand = (p.brand || "").toLowerCase();
      const text = `${name} ${brand}`;

      const matchSearch =
        search.trim() === "" || text.includes(search.toLowerCase());

      let matchCategory = true;

      if (category === "RC") {
        matchCategory =
          text.includes("rc") ||
          text.includes("drift") ||
          text.includes("crawler") ||
          text.includes("buggy");
      } else if (category === "Die Cast") {
        matchCategory =
          text.includes("die cast") || text.includes("diecast");
      } else if (category === "Construction") {
        matchCategory =
          text.includes("excavator") ||
          text.includes("truck") ||
          text.includes("construction");
      } else if (category === "Aircraft") {
        matchCategory =
          text.includes("fighter jet") ||
          text.includes("aircraft") ||
          text.includes("plane");
      }

      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-orange-500">
          Shop
        </p>
        <h1 className="mt-2 text-3xl font-bold">All Products</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Explore RC cars, aircraft, die-cast collectibles, construction toys,
          and hobby products from KPN TOYSEE.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                category === c
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}