"use client";

import { useEffect, useState } from "react";
import ArrowLeft from "../(logo)/arrowLeft";
import CartAccumulation from "../(ui)/cartAccumulation";
import CartCard from "../(ui)/cartCard";
import NavBar from "../(ui)/navBar";
import Link from "next/link";
import { Cart, Carts } from "../(lib)/type";

export default function Page() {
  const [carts, setCarts] = useState([{ name: "", quantity: 0, price: 0 }]);

  const totalCarts = carts.map((e) => e.quantity).reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (!localStorage.getItem("cartData")) {
      localStorage.setItem("cartData", JSON.stringify([]));
    }
    setCarts(JSON.parse(localStorage.getItem("cartData") as string));
  }, []);

  function handleMinus(items: any) {
    const newCarts = carts.map((e: Cart) => {
      if (e.name === items.name) {
        return { ...e, quantity: e.quantity - 1 };
      } else {
        return e;
      }
    });

    setCarts(newCarts);
    localStorage.setItem("cartData", JSON.stringify(newCarts));
  }

  function handlePlus(items: { name: string }) {
    const newCarts = carts.map((e: Cart) => {
      if (e.name === items.name) {
        return { ...e, quantity: e.quantity + 1 };
      } else {
        return e;
      }
    });
    setCarts(newCarts);
    localStorage.setItem("cartData", JSON.stringify(newCarts));
  }

  return (
    <div className="min-h-screen">
      <NavBar totalCarts={totalCarts} />
      <main className="my-4 px-4">
        <div className="flex gap-3">
          <Link href={"/dashboard"} className="w-5">
            <ArrowLeft />
          </Link>
          <h2 className="mb-2 text-sm text-gray-500">Checkout Item</h2>
        </div>
        <ul className="flex flex-col gap-y-4 pb-20">
          {carts.map((cart, i) => (
            <CartCard handleMinus={handleMinus} handlePlus={handlePlus} key={i}>
              {cart}
            </CartCard>
          ))}
        </ul>
      </main>
      <CartAccumulation total={acc(carts)} />
    </div>
  );
}

function acc(carts: { name: string; quantity: number; price: number }[]): any {
  const hasilKali = carts.map((e) => e.price * e.quantity);
  return hasilKali.reduce((a, b) => a + b, 0);
}

function handlePlus(element: Cart, carts: Carts, setCarts: any) {}
