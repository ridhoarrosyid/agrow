"use client";

import NavBar from "../(ui)/navBar";
import CategoryCard from "../(ui)/categoryCard";
import SalesCard from "../(ui)/salesCard";
import HotNews from "../(ui)/hotNews";
import Link from "next/link";
import FeatureCard from "../(ui)/featureCard";

export default function Dashboard() {
  const items = [
    {
      name: "fruits",
      img: "/",
    },
    {
      name: "vegetables",
      img: "/",
    },
    {
      name: "beans",
      img: "/",
    },
    {
      name: "seeds",
      img: "/",
    },
  ];

  const sales = [
    {
      name: "carrot",
      img: "/",
    },
    {
      name: "egg plant",
      img: "/",
    },
    {
      name: "grain",
      img: "/",
    },
    {
      name: "rice",
      img: "/",
    },
    {
      name: "banana",
      img: "/",
    },
    {
      name: "corn",
      img: "/",
    },
  ];

  const hotNews = [
    {
      name: "nama berita",
      img: "/",
      description: "deskripsi berita. ini berisi deskripsi berita",
    },
    {
      name: "nama berita",
      img: "/",
      description: "deskripsi berita. ini berisi deskripsi berita",
    },
    {
      name: "nama berita",
      img: "/",
      description: "deskripsi berita. ini berisi deskripsi berita",
    },
    {
      name: "nama berita",
      img: "/",
      description: "deskripsi berita. ini berisi deskripsi berita",
    },
    {
      name: "nama berita",
      img: "/",
      description: "deskripsi berita. ini berisi deskripsi berita",
    },
  ];

  const features = [
    {
      img: "/feature-1.png",
    },
    {
      img: "/feature-2.png",
    },
    {
      img: "/feature-3.png",
    },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <main className="space-y-5 p-4">
        <section>
          <h2 className="mb-4 text-xl font-bold">Feature</h2>
          <ul className="flex justify-center gap-2">
            {features.map((e, i) => (
              <FeatureCard key={i}>{e}</FeatureCard>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-bold">Categories</h2>
          <div className="flex justify-center gap-2">
            {items.map((e) => (
              <CategoryCard key={e.name}>{e}</CategoryCard>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-xl font-bold">Hot News</h2>
            <Link
              href={"/hot-news"}
              className="mb-4 rounded bg-blue-700 p-1 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
            >
              See Other
            </Link>
          </div>
          <div className="flex h-44 flex-col gap-y-4 overflow-auto">
            {hotNews.map((e, i) => (
              <HotNews key={i}>{e}</HotNews>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-bold">On Sale</h2>

          <div className="grid grid-cols-2 gap-2">
            {sales.map((e, i) => (
              <SalesCard key={i}>{e}</SalesCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
