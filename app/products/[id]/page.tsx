"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { sales } from "@/app/(lib)/data";
import ArrowLeft from "@/app/(logo)/arrowLeft";
import Link from "next/link";

export default function Product() {
  const params = useParams();
  const sale = sales.filter((e) => e.link.split("/")[2] == params.id)[0];

  return (
    <div className="relative min-h-screen">
      <Link
        href={"/dashboard"}
        className="absolute left-2 top-2 w-9 rounded-full bg-[#96efc1] p-2"
      >
        <ArrowLeft />
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
        <p className="text-sm text-gray-500">{sale.desc}</p>
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between border border-gray-200 bg-[#F3F8FF] px-4 py-4 shadow">
          <p className="text-2xl font-bold">{sale.price}</p>
          <button className="item inline-flex content-end place-self-center justify-self-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
}
