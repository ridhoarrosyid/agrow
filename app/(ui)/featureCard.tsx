import Image from "next/image";

export default function FeatureCard({
  children,
}: {
  children: { img: string };
}) {
  return (
    <li>
      <Image
        className="w-28 "
        src={children.img}
        alt={children.img}
        width={5000}
        height={5000}
      />
    </li>
  );
}
