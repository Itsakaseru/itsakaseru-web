import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function AboutLayout({ children, }: Readonly<{ children: ReactNode; }>) {
  return (
    <div className="flex flex-col w-full min-h-screen p-14 space-y-8 bg-white">
      <Navbar currentPage="About Me"/>
      {children}
      <footer className="mx-auto text-cocoa">
        © 2024
        <ruby> It
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
