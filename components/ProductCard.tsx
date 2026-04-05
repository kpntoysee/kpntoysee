import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { productImages } from "@/lib/product-images";

export default function ProductCard({ product }: { product: Product }) {
  const imageSrc = productImages[product.slug] || "/products/placeholder.jpg";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-44 bg-gray-100 overflow-hidden">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-500">
          {product.brand || "KPN TOYSEE"}
        </p>

        <h2 className="mt-2 line-clamp-2 min-h-[40px] text-sm font-bold text-gray-900">
          {product.name}
        </h2>

        {product.short_description ? (
          <p className="mt-2 line-clamp-2 text-xs text-gray-500">
            {product.short_description}
          </p>
        ) : null}

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-extrabold text-gray-900">₹{product.price}</p>
          <span className="rounded-full bg-orange-50 px-2 py-1 text-[11px] font-medium text-orange-600">
            {product.stock > 0 ? "In Stock" : "Out of stock"}
          </span>
        </div>
      </div>
    </Link>
  );
}