import Minus from "../(logo)/minus";
import Plus from "../(logo)/plus";

export default function CartCard({
  children,
}: {
  children: { name: string; quantity: number; price: string };
}) {
  return (
    <li className="rounded-md border border-gray-200 p-3 shadow">
      <h1 className="font-bold">{children.name}</h1>
      <p className="mb-2"> {children.price} </p>
      <div className="flex justify-between">
        <p>Quantity</p>
        <div className="flex items-center justify-between gap-x-5">
          <div className="h-4 w-4">
            <Plus />
          </div>
          {children.quantity}
          <div className="h-4 w-4">
            <Minus />
          </div>
        </div>
      </div>
    </li>
  );
}
