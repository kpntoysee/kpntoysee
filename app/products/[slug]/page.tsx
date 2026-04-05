import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/queries";
import { productImages } from "@/lib/product-images";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const imageSrc = productImages[product.slug] || "/products/placeholder.jpg";

  const whatsappMessage = encodeURIComponent(
    `Hi KPN TOYSEE, I'm interested in this product:\n\n${product.name}\nPrice: ₹${product.price}\nProduct Link: https://kpntoysee.com/products/${product.slug}`
  );

  const whatsappUrl = `https://wa.me/919940705019?text=${whatsappMessage}`;

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 md:py-10">
      <div className="mb-6">
        <Link
          href="/shop"
          className="inline-flex items-center text-sm font-medium text-gray-500 transition hover:text-orange-500"
        >
          ← Back to Shop
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="relative h-[340px] bg-gray-50 md:h-[520px]">
            <Image
              src={imageSrc}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-500">
            {product.brand || "KPN TOYSEE"}
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <p className="text-3xl font-extrabold text-gray-900">₹{product.price}</p>
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
              {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
            </span>
          </div>

          {product.short_description && (
            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              {product.short_description}
            </p>
          )}

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Category</p>
              <p className="mt-2 text-sm font-semibold text-gray-900">Premium Hobby Product</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Delivery</p>
              <p className="mt-2 text-sm font-semibold text-gray-900">Across India</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Support</p>
              <p className="mt-2 text-sm font-semibold text-gray-900">WhatsApp Direct</p>
            </div>
          </div>

          {product.description && (
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="text-lg font-bold text-gray-900">Product Description</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {product.description}
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
              }}
            />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              WhatsApp Order
            </a>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-5">
            <p className="text-sm font-semibold text-gray-900">Why buy from KPN TOYSEE?</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>• Premium hobby and collectible selection</li>
              <li>• Fast customer support through WhatsApp</li>
              <li>• Carefully selected products for enthusiasts and collectors</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}