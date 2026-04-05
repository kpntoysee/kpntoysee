"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCartCount } from "@/lib/cart";

export default function MobileNav() {
  const path = usePathname();
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

  const linkClass = (href: string) =>
    `relative flex flex-col items-center text-xs ${
      path === href ? "text-orange-500" : "text-gray-500"
    }`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t bg-white py-2 md:hidden">
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>
      <Link href="/shop" className={linkClass("/shop")}>
        Shop
      </Link>
      <Link href="/cart" className={linkClass("/cart")}>
        Cart
        {cartCount > 0 && (
          <span className="absolute -right-2 -top-1 rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </Link>
      <Link href="/contact" className={linkClass("/contact")}>
        Contact
      </Link>
    </div>
  );
}