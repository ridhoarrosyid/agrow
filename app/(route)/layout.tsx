import { ReactNode } from "react";
import Navbar from "../(ui)/footerNavbar";

export default function navbarLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="pb-10">{children}</div>
      <Navbar />
    </>
  );
}
