import Link from "next/link";
import { getFeaturedProducts } from "@/lib/queries";
import ProductCard from "@/components/ProductCard";

const categories = [
  {
    title: "RC Cars",
    desc: "Fast, fun, and built for enthusiasts",
    href: "/shop?category=RC",
    emoji: "🏎️",
  },
  {
    title: "Die Cast Models",
    desc: "Collector-grade miniature vehicles",
    href: "/shop?category=Die%20Cast",
    emoji: "🚘",
  },
  {
    title: "Construction Toys",
    desc: "Excavators, trucks, and heavy machines",
    href: "/shop?category=Construction",
    emoji: "🚜",
  },
  {
    title: "Aircraft RC",
    desc: "Flight toys and remote-control aircraft",
    href: "/shop?category=Aircraft",
    emoji: "✈️",
  },
];

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <main>
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-black/60" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
              Premium RC & Collectibles
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Built for
              <span className="block text-orange-500">
                Collectors & Speed Lovers
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-200 md:text-base">
              Explore RC cars, die-cast models, aircraft toys, construction
              machines, and premium hobby products curated for enthusiasts.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Shop
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Premium Quality", "WhatsApp Support", "Fast Shipping"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-gray-100"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-6 py-4 text-sm text-gray-600">
          <span>🚚 Fast Shipping Across India</span>
          <span>💯 Quality Checked Products</span>
          <span>📞 Direct WhatsApp Support</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">
              Categories
            </p>
            <h2 className="mt-2 text-3xl font-bold">Shop by Category</h2>
          </div>

          <Link href="/shop" className="text-sm font-semibold text-orange-500">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group rounded-3xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl">{cat.emoji}</div>
              <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-orange-500">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">
              Featured Collection
            </p>
            <h2 className="mt-2 text-3xl font-bold">Popular Picks</h2>
          </div>

          <Link href="/shop" className="text-sm font-semibold text-orange-500">
            Browse Shop
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">
              Why KPN TOYSEE
            </p>
            <h3 className="mt-3 text-xl font-bold">Curated for enthusiasts</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              We focus on products that are exciting to own, display, gift, and enjoy.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">
              Easy Buying
            </p>
            <h3 className="mt-3 text-xl font-bold">Simple order flow</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Browse products, add to cart, or directly order through WhatsApp support.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">
              Support
            </p>
            <h3 className="mt-3 text-xl font-bold">Fast response</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Need help choosing a model? We are available for direct customer support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-100">
            Start Exploring
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Find Your Next Favorite Model
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-orange-50">
            Discover collector-grade die-cast models, RC cars, aircraft, and more from KPN TOYSEE.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Explore Shop
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Need Help?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}