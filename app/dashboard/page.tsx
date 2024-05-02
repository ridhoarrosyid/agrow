"use client";

import NavBar from "../(ui)/navBar";
import CategoryCard from "../(ui)/categoryCard";
import SalesCard from "../(ui)/salesCard";
import HotNews from "../(ui)/hotNews";
import Link from "next/link";
import FeatureCard from "../(ui)/featureCard";
import { items, features, hotNews, sales } from "../(lib)/data";

export default function Dashboard() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="space-y-5 p-4 md:space-y-20">
        <section>
          <h2 className="mb-4 text-xl font-bold">Feature</h2>
          <ul className="flex items-center justify-center gap-2 md:justify-evenly md:gap-0">
            {features.map((e, i) => (
              <FeatureCard key={i}>{e}</FeatureCard>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-bold">Categories</h2>
          <div className="flex justify-center gap-2 md:justify-evenly md:gap-0">
            {items.map((e) => (
              <CategoryCard key={e.name}>{e}</CategoryCard>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-xl font-bold">Agro News</h2>
            <Link
              href={"/hot-news"}
              className="mb-4 rounded bg-blue-700 p-1 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
            >
              See All
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

          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {sales.map((e, i) => (
              <SalesCard key={i}>{e}</SalesCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
