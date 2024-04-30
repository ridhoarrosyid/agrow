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
    <div className="flex flex-col items-center text-sm">
      <Image
        src="/empty.jpg"
        alt={children.name}
        width={10}
        height={10}
        className="mb-2 h-20 w-20 rounded-lg object-fill object-center"
      />
      {children.name}
    </div>
  );
}
