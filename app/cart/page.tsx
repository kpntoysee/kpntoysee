"use client";

import { useEffect, useState } from "react";
import { getCart, removeFromCart, clearCart } from "@/lib/cart";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="mt-6 text-gray-500">Cart is empty</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border p-4 rounded-lg bg-white"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() => {
                  removeFromCart(item.id);
                  setCart(getCart());
                }}
                className="text-red-500 text-sm font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-xl font-bold">Total: ₹{total}</div>

          <button
            onClick={() => {
              clearCart();
              setCart([]);
            }}
            className="border px-4 py-2 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      )}
    </main>
  );
}