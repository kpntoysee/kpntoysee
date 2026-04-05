"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";

type CartProduct = {
  id: string;
  name: string;
  price: number;
};

export default function AddToCartButton({
  product,
}: {
  product: CartProduct;
}) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    console.log("Adding product:", product);
    addToCart(product);
    console.log("Cart after add:", localStorage.getItem("cart"));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleAddToCart}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold"
      >
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>

      {added && (
        <p className="text-sm text-green-600 font-medium">
          Product added to cart
        </p>
      )}
    </div>
  );
}