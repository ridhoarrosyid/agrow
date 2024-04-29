"use client";

import NavBar from "../ui/navBar";
import CategoryCard from "../ui/categoryCard";
import SalesCard from "../ui/salesCard";

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
  return (
    <div>
      <NavBar></NavBar>
      <main className="space-y-5 p-4">
        <section>
          <h2 className="mb-4 text-xl font-bold">Categories</h2>
          <div className="flex justify-center gap-2">
            {items.map((e) => (
              <CategoryCard key={e.name}>{e}</CategoryCard>
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
