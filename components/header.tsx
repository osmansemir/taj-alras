import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex  h-24 shrink-0 items-center justify-between gap-2 border-b px-4">
      <Link href="/" className="">
        <div className="font-bold text-xl lg:text-3xl font-sans">Taj Alras</div>
        <span className="text-sm hidden lg:block">Goods Wholesalers L.L.C</span>
      </Link>

      <nav className=" flex gap-6 w-2/3  font-serif *:hover:underline *:hover:text-primary transition-all *:ease-in-out">
        <Link href="/">Home</Link>
        <Link href="/products">products</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
      </nav>
      <ModeToggle className="mr-2" />
    </header>
  );
}
