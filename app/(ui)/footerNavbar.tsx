"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faKitchenSet,
  faNewspaper,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <footer className="fixed bottom-0 flex w-lvw items-center justify-between border border-gray-200 bg-inherit px-8 pb-3 pt-5 text-center text-sm shadow">
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faHouse} size="xl" />
        Home
      </div>
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faCartShopping} size="xl" />
        Cart
      </div>
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faKitchenSet} size="xl" />
        Recipe
      </div>
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faWheatAwn} size="xl" />
        Farm
      </div>

      <div className="flex flex-col">
        <FontAwesomeIcon icon={faNewspaper} size="xl" />
        News
      </div>
    </footer>
  );
}
