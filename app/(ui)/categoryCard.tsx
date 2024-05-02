import Image from "next/image";

export default function CategoryCard({
  children,
}: {
  children: {
    name: string;
    img: string;
  };
}) {
  return (
    <div className="flex flex-col items-center text-sm capitalize md:text-lg">
      <Image
        src={children.img}
        alt={children.name}
        width={1000}
        height={1000}
        className="mb-2 aspect-square w-20 rounded-lg  object-none object-center md:w-40"
      />
      {children.name}
    </div>
  );
}
