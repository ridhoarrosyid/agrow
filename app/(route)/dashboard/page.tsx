"use client";

import NavBar from "@/app/(ui)/navBar";

import SalesCard from "@/app/(ui)/salesCard";
import HotNews from "@/app/(ui)/hotNews";
import Link from "next/link";

import { hotNews, sales } from "@/app/(lib)/data";
import { useEffect, useState } from "react";
import { Carts } from "@/app/(lib)/type";
import Image from "next/image";

export default function Dashboard() {
  const [totalCarts, setTotalCarts] = useState(0);
  useEffect(() => {
    if (!localStorage.getItem("cartData")) {
      localStorage.setItem("cartData", JSON.stringify([]));
    }

    const dataStorage: Carts = JSON.parse(
      localStorage.getItem("cartData") as string,
    );
    const total = dataStorage.map((e) => e.quantity).reduce((a, b) => a + b, 0);
    setTotalCarts(total);
  }, []);

  return (
    <div>
      <NavBar totalCarts={totalCarts}></NavBar>
      <input
        type="text"
        id="search-navbar"
        className="mx-auto block w-[90%] rounded-full border bg-gray-100 p-2 ps-10 text-sm text-gray-900 shadow-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 md:hidden"
        placeholder="Search..."
      />
      <main className="space-y-5 p-4 md:space-y-20">
        <section className="mx-auto">
          <h1 className="mb-3 text-xl font-medium">Grow Pre Order</h1>
          <div className="flex w-full justify-evenly rounded-full border-2 border-gray-300 bg-gray-200  ">
            <div className="w-1/2 text-center">
              <p>Hari ini</p>
              <p className="text-xs text-red-500">Tutup</p>
            </div>
            <div className="w-1/2 rounded-full bg-gray-50 text-center">
              <p className="font-semibold">Terjadwal</p>
              <p className="text-xs">6000+ Product</p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 overflow-hidden rounded-xl">
          <Image
            src={"/penawaran3.jpg"}
            alt="penawaran 3"
            width={1600}
            height={900}
          />
          <Image
            src={"/penawaran2.jpg"}
            alt="penawaran 2"
            width={1600}
            height={900}
          />
          <Image
            src={"/penawaran4.jpg"}
            alt="penawaran 4"
            width={1600}
            height={900}
          />
          <Image
            src={"/penawaran1.jpg"}
            alt="penawaran 1"
            width={1600}
            height={900}
          />
        </section>
        <section className="overflow-auto">
          <div className="mt-4 flex w-max gap-4 overflow-auto pb-3 text-center text-xs">
            <div>
              <Image
                src={"/kategori/all.jpg"}
                alt="all"
                width={400}
                height={400}
                className="mb-1 h-[80px] w-[80px] rounded"
              />
              All
            </div>
            <div>
              <Image
                src={"/kategori/fruit.jpg"}
                alt="fruit"
                width={400}
                height={400}
                className="mb-1 h-[80px] w-[80px] rounded"
              />
              Fruits
            </div>
            <div>
              <Image
                src={"/kategori/vegetable.jpg"}
                alt="vegetables"
                width={400}
                height={400}
                className="mb-1 h-[80px] w-[80px] rounded"
              />
              Vegetables
            </div>
            <div>
              <Image
                src={"/kategori/grocery.jpg"}
                alt="grocery"
                width={400}
                height={400}
                className="mb-1 h-[80px] w-[80px] rounded"
              />
              Groceries
            </div>
            <div>
              <Image
                src={"/kategori/protein.jpg"}
                alt="protein"
                width={400}
                height={400}
                className="mb-1 h-[80px] w-[80px] rounded"
              />
              Protein
            </div>
            <div>
              <Image
                src={"/kategori/cereal.jpg"}
                alt="cereal"
                width={400}
                height={400}
                className="mb-1 h-[80px] w-[80px] rounded"
              />
              Cereals
            </div>
            <div>
              <Image
                src={"/kategori/oil.jpg"}
                alt="oil"
                width={400}
                height={400}
                className="mb-1 h-[80px] w-[80px] rounded"
              />
              Oil
            </div>
            <div>
              <Image
                src={"/kategori/herbs.jpg"}
                alt="herbs"
                width={400}
                height={400}
                className="mb-1 h-[80px] w-[80px] rounded"
              />
              Herbs
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-xl font-bold">Agro News</h2>
            <Link
              href={"/hot-news"}
              className="mb-4 rounded bg-blue-700 p-1 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
            >
              See All
            </Link>
          </div>
          <div className="flex h-44 flex-col gap-y-4 overflow-auto">
            {hotNews.map((e, i) => (
              <HotNews key={i}>{e}</HotNews>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-bold">On Sale</h2>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {sales.map((e, i) => (
              <SalesCard key={i}>{e}</SalesCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
