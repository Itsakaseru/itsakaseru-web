import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function AboutLayout({ children, }: Readonly<{ children: ReactNode; }>) {
  return (
    <div className={
      "flex flex-col w-full min-h-screen sm:p-14 space-y-8 bg-white " +
      "p-10"
    }>
      <Navbar currentPage="About Me"/>
      {children}
      <footer className="mx-auto text-cocoa">
        © 2024
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
