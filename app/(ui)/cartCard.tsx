"use client";

import { Cart, Carts } from "../(lib)/type";
import Minus from "../(logo)/minus";
import Plus from "../(logo)/plus";

export default function CartCard({
  children,
  handleMinus,
  handlePlus,
}: {
  children: Cart;
  handleMinus: any;
  handlePlus: any;
}) {
  return (
    <li className="rounded-md border border-gray-200 p-3 shadow">
      <h1 className="font-bold">{children.name}</h1>
      <p className="mb-2"> {`$${children.price}`} </p>
      <div className="flex justify-between">
        <p>Quantity</p>
        <div className="flex items-center justify-between gap-x-5">
          <div
            className="h-4 w-4"
            onClick={() => {
              handleMinus(children);
            }}
          >
            <Minus />
          </div>
          {children.quantity}
          <div
            className="h-4 w-4"
            onClick={() => {
              handlePlus(children);
            }}
          >
            <Plus />
          </div>
        </div>
      </div>
    </li>
  );
}
