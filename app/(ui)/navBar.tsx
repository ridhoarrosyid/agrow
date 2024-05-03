import Image from "next/image";
import Link from "next/link";
import Cart from "../(logo)/cart";
import { useEffect, useState } from "react";
import { Cart as CartType, Carts } from "../(lib)/type";

export default function NavBar({ totalCarts }: { totalCarts: number }) {
  // const [total, setTotal] = useState(totalCarts);

  // useEffect(() => {
  //   const cartDataStorage: Carts = JSON.parse(
  //     localStorage.getItem("cartData") as string,
  //   );
  //   const totalData = cartDataStorage
  //     .map((e: CartType) => e.quantity)
  //     .reduce((a: number, b: number) => a + b, 0);
  //   setTotal(totalData);
  // }, []);

  return (
    <nav className="border-gray-200  bg-[#96efc1] pb-4 ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 ">
        <div className="flex items-center space-x-3">
          <Image
            src="/profile.jpeg"
            width={20}
            height={20}
            className="inline-block h-10 w-10 rounded-full object-cover object-center"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-[#0C0C0C]">
            Andi
          </span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="mx-auto hidden rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 md:block md:w-[70%]"
          placeholder="Search..."
        />
        <div className="flex h-5 gap-x-8">
          <Link href={"/notifications"} className="block h-7 w-7">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#0C0C0C"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </Link>
          <Link href={"/carts"} className="relative block h-7 w-7">
            <p className="absolute -bottom-3 -left-4 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 p-1 text-xs font-medium text-white">
              {totalCarts}
            </p>
            <Cart />
          </Link>
        </div>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="mx-auto block w-[90%] rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 md:hidden"
        placeholder="Search..."
      />
    </nav>
  );
}
