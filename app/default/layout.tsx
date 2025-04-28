import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";

export default function DefaultLayout() {
  return (
    <div
      className={
        "flex flex-col w-full min-h-screen sm:p-14 space-y-8 bg-white " +
        "p-10"
      }
    >
      <Navbar />
      <Outlet />
      <footer className="mx-auto text-cocoa">
        © 2025
        <ruby className="ml-1">It
          <rt>イ</rt>
          sa
          <rt>サ</rt>
          ka
          <rt>カ</rt>
          se
          <rt>セ</rt>
          ru
          <rt>ル</rt>
        </ruby>
        . All Rights Reserved.
      </footer>
    </div>
  );
}
