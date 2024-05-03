import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-lvh w-lvw grid-rows-4">
      <Image
        src={"/logo.png"}
        alt="Agrow Image"
        width={1000}
        height={1000}
        className="row-span-3 w-full place-self-center md:w-[45rem]"
      />
      <Link
        href={"/dashboard"}
        type="button"
        className="item inline-flex content-end place-self-center justify-self-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        See The App
        <svg
          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}
