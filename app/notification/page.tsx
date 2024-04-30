import Image from "next/image";

export default function Page() {
  const listNotifications = [
    {
      name: "notification name",
      description: "ini description",
    },
    {
      name: "notification name",
      description: "ini description",
    },
    {
      name: "notification",
      description: "ini description",
    },
    {
      name: "notification",
      description: "ini description",
    },
    {
      name: "notification",
      description: "ini description",
    },
  ];

  return (
    <div>
      <div className="px-4">
        <h1 className="mb-4 text-xl font-bold">News</h1>
        <ul className="flex h-44 flex-col gap-y-4">
          {listNotifications.map((e, i) => (
            <li
              key={i}
              className="flex justify-start gap-2 rounded-md border border-gray-200 bg-white shadow"
            >
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
