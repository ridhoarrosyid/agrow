import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "../(logo)/arrowLeft";
import { allNews } from "../(lib)/data";

export default function Page() {
  return (
    <div>
      <div className="relative mb-4 border-b border-gray-200 bg-[#96efc1] pt-10 shadow-md">
        <Link href={"/dashboard"} className="absolute left-2 top-2 w-7 ">
          <ArrowLeft />
        </Link>
        <Image
          src={"/sayur.jpg"}
          alt="ini adalah gambar berita"
          width={1000}
          height={1000}
          className="h-40 w-full object-cover object-center"
        />
      </div>
      <div className="px-4 ">
        <h1 className="mb-4 text-xl font-bold md:mb-8 md:text-2xl">News</h1>
        <ul className="flex flex-col gap-y-4">
          {allNews.map((e, i) => (
            <li
              key={i}
              className="flex flex-col items-start justify-center gap-2 rounded-md border border-gray-200 bg-white p-4 shadow"
            >
              <Image
                src={e.img}
                alt="gambar berita"
                width={1000}
                height={1000}
                className="w-full rounded-l-md object-cover object-center md:h-96 "
              />
              <div>
                <h1 className=" mb-4 font-bold capitalize md:text-xl">
                  {e.name}
                </h1>
                <p className="text-sm text-gray-500 md:text-lg">
                  {e.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
