import Image from "next/image";

export default function HotNews({
  children,
}: {
  children: { name: string; img: string; description: string };
}) {
  return (
    <div className="flex justify-start gap-2 rounded-md border border-gray-200 bg-white shadow">
      <Image
        src="/empty.jpg"
        alt="gambar berita"
        width={10}
        height={10}
        className="h-full w-16 rounded-l-md object-cover object-center"
      />
      <div>
        <h1 className="font-bold">{children.name}</h1>
        <p className="text-sm">{children.description}</p>
      </div>
    </div>
  );
}
