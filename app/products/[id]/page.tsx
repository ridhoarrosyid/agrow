"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { sales } from "@/app/(lib)/data";
import ArrowLeft from "@/app/(logo)/arrowLeft";
import Link from "next/link";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Cart from "@/app/(logo)/cart";
import { Cart as CartType } from "@/app/(lib)/type";

export default function Product() {
  const params = useParams();
  const sale = sales.filter((e) => e.link.split("/")[2] == params.id)[0];

  const [totalBuy, setTotalBuy] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("cartData")) {
      localStorage.setItem("cartData", JSON.stringify([]));
    }
    const cartsStorage = JSON.parse(localStorage.getItem("cartData") as string);
    const cartItem = cartsStorage.filter((e: CartItem) => e.name === sale.name);
    const qty = cartItem[0]?.qty ?? 0;
  }, [sale.name]);

  useEffect(() => {
    const cartsStorage = JSON.parse(localStorage.getItem("cartData") as string);
    const totalItem = cartsStorage
      .map((e: CartType) => e.quantity)
      .reduce((a: number, b: number) => a + b, 0);
    setTotalBuy(totalItem);
  }, []);

  function handleClick(name: string, price: number) {
    if (!localStorage.getItem("cartData")) {
      localStorage.setItem("cartData", JSON.stringify([]));
    }

    const preData = JSON.parse(localStorage.getItem("cartData") as string);

    if (preData.some((e: CartItem) => e.name == name)) {
      const newData = preData.map((e: CartItem) => {
        if (e.name === name) {
          return { ...e, quantity: e.quantity + 1 };
        } else {
          return e;
        }
      });
      localStorage.setItem("cartData", JSON.stringify(newData));
    } else {
      const newData = [...preData, { name: name, quantity: 1, price: price }];
      localStorage.setItem("cartData", JSON.stringify(newData));
    }
    setTotalBuy(totalBuy + 1);
    alert("Item has been added");
  }

  return (
    <div className="relative min-h-screen">
      <Link
        href={"/dashboard"}
        className="absolute left-2 top-2 w-9 rounded-full bg-[#96efc1] p-2"
      >
        <ArrowLeft />
      </Link>
      <Link
        href={"/carts"}
        className="absolute right-2 top-2 w-9 rounded-full bg-[#96efc1] p-2"
      >
        <p className="absolute -bottom-3 -left-4 flex aspect-square w-6 items-center justify-center rounded-full bg-red-500 p-1 text-xs text-white">
          {totalBuy}
        </p>
        <Cart />
      </Link>
      <Image
        src={sale.img}
        alt="gambar"
        width={1000}
        height={1000}
        className="h-52 object-cover object-center"
      />
      <div className="space-y-4 p-4">
        <h1 className="text-2xl font-bold capitalize">{sale.name}</h1>
        <p className="pb-20 text-sm text-gray-500">{sale.desc}</p>
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between border border-gray-200 bg-[#F3F8FF] px-4 py-4 shadow">
          <p className="text-2xl font-bold">{`$${sale.price}`}</p>
          <button
            onClick={() => {
              handleClick(
                sale.name,

                parseFloat(sale.price),
              );
            }}
            className="item inline-flex content-end place-self-center justify-self-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
}

class CartItem {
  constructor(
    public name: string,
    public quantity: number,
    public price: number,
  ) {}
}
