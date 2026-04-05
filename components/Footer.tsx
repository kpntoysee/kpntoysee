import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        
        <div>
          <h2 className="text-lg font-bold">KPN TOYSEE</h2>
          <p className="text-sm text-gray-400 mt-3">
            RC Cars • Die Cast • Premium Toys for enthusiasts and collectors.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Policies</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link href="/policies/shipping">Shipping</Link>
            <Link href="/policies/returns">Returns</Link>
            <Link href="/policies/privacy">Privacy</Link>
            <Link href="/policies/terms">Terms</Link>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} KPN TOYSEE. All rights reserved.
      </div>
    </footer>
  );
}