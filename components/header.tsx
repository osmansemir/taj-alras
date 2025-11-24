import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import TajAlrasLogo from "./taj-alras-logo";

export default function Header() {
  return (
    <header className="flex  h-24 shrink-0 items-center justify-between gap-2 border-b px-4">
      <Link href="/" className="flex flex-col">
        <TajAlrasLogo className="size-9 max-lg:mx-auto lg:ml-0 max-lg:size-12 text-yellow-500" />
        <div className="font-bold text-xl lg:text-2xl font-sans flex items-end">
          Taj Alras
        </div>
        <span className="text-xs hidden lg:block">Goods Wholesalers L.L.C</span>
      </Link>

      <div className=" flex gap-4 text-sm">
        <nav className=" flex gap-6  font-serif *:hover:underline *:hover:text-primary transition-all *:ease-in-out">
          <Link href="/">Home</Link>
          <Link href="/products">products</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
        </nav>
        <ModeToggle className="" />
      </div>
    </header>
  );
}
