import Image from "next/image";

export default function HotNews({
  children,
}: {
  children: { name: string; img: string; description: string };
}) {
  return (
    <div className="flex h-32 justify-start gap-2 rounded-md border border-gray-200 bg-white shadow">
      <Image
        src={children.img}
        alt="gambar berita"
        width={1000}
        height={1000}
        className="aspect-square h-full w-16 rounded-l-md object-cover object-center"
      />
      <div className="p-1">
        <h1 className="line-clamp-2 font-bold">{children.name}</h1>
        <p className="line-clamp-1 text-sm text-gray-500">
          {children.description}
        </p>
      </div>
    </div>
  );
}
