import ArrowLeft from "../(logo)/arrowLeft";
import CartAccumulation from "../(ui)/cartAccumulation";
import CartCard from "../(ui)/cartCard";
import NavBar from "../(ui)/navBar";
import Link from "next/link";

export default function Page() {
  const carts = [
    {
      name: "product name",
      quantity: 5,
      price: "$50",
    },
    {
      name: "product name",
      quantity: 5,
      price: "$50",
    },
    {
      name: "product name",
      quantity: 5,
      price: "$50",
    },
    {
      name: "product name",
      quantity: 5,
      price: "$50",
    },
    {
      name: "product name",
      quantity: 5,
      price: "$50",
    },
  ];
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="my-4 px-4">
        <div className="flex gap-3">
          <Link href={"/dashboard"} className="w-5">
            <ArrowLeft />
          </Link>
          <h2 className="mb-2 text-sm text-gray-500">Checkout Item</h2>
        </div>
        <ul className="flex flex-col gap-y-4 pb-20">
          {carts.map((e, i) => (
            <CartCard key={i}>{e}</CartCard>
          ))}
        </ul>
      </main>
      <CartAccumulation />
    </div>
  );
}
