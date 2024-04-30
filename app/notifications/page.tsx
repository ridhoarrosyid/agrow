import Link from "next/link";
import NavBar from "../(ui)/navBar";
import ArrowLeft from "../(logo)/arrowLeft";

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
      <NavBar></NavBar>
      <div className="p-4">
        <div className="mb-4 flex items-center justify-start gap-2">
          <Link href={"/dashboard"} className="h-5 w-5">
            <ArrowLeft />
          </Link>
          <h1 className="text-xl font-bold">Notifications</h1>
        </div>
        <ul className="flex h-44 flex-col gap-y-4">
          {listNotifications.map((e, i) => (
            <li
              key={i}
              className="flex justify-start gap-2 rounded-md border border-gray-200 bg-white p-2 shadow"
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
