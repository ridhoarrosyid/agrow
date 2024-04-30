import HotNews from "../(ui)/hotNews";
import Image from "next/image";

export default function Page() {
  const listNews = [
    {
      name: "nama berita",
      img: "/",
      description: "ini description",
    },
    {
      name: "nama berita",
      img: "/",
      description: "ini description",
    },
    {
      name: "nama berita",
      img: "/",
      description: "ini description",
    },
    {
      name: "nama berita",
      img: "/",
      description: "ini description",
    },
    {
      name: "nama berita",
      img: "/",
      description: "ini description",
    },
  ];

  return (
    <div>
      <Image
        src={"/empty.jpg"}
        alt="ini adalah gambar berita"
        width={10}
        height={10}
        className="h-40 w-full object-cover object-center"
      />
      <div className="px-4">
        <h1 className="mb-4 text-xl font-bold">News</h1>
        <ul className="flex h-44 flex-col gap-y-4">
          {listNews.map((e, i) => (
            <li
              key={i}
              className="flex justify-start gap-2 rounded-md border border-gray-200 bg-white shadow"
            >
              <Image
                src="/empty.jpg"
                alt="gambar berita"
                width={10}
                height={10}
                className="h-full w-16 rounded-l-md object-cover object-center"
              />
              <div>
                <h1 className="font-bold">{e.name}</h1>
                <p className="text-sm">{e.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
