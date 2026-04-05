"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCartCount } from "@/lib/cart";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => setCartCount(getCartCount());

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-wide">
          <span className="text-black">KPN</span>{" "}
          <span className="text-orange-500">TOYSEE</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Shop
          </Link>
          <Link href="/cart" className="relative text-sm font-medium text-gray-700 hover:text-orange-500">
            Cart
            {cartCount > 0 && (
              <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}