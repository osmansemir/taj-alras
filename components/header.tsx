import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex  h-[100px] shrink-0 items-center gap-2 border-b px-4">
      <div className="pr-20">
        <div className="font-bold text-3xl font-sans">Taj Alras</div>
        <span className="text-sm">Goods Wholesalers L.L.C</span>
      </div>

      <nav className=" flex gap-6 grow font-serif *:hover:bg-red-500">
        <Link href="/">Home</Link>
        <Link href="/products">products</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
      </nav>
      <ModeToggle />
    </header>
  );
}
