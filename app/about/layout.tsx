import Navbar from "@/components/Navbar";

export default function AboutLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white p-14 space-y-8">
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
    </main>
  );
}
