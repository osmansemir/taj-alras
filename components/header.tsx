import Link from "next/link";
import TajAlrasLogo from "@/components/taj-alras-logo";
import MobileDropdown from "@/components/mobile-dropdown";
import { AnimatedThemeToggler } from "./animated-theme-toggle";

export default function Header() {
  return (
    <header
      role="banner"
      className="flex  h-15 shrink-0 items-center justify-between gap-2 border-b px-4"
    >
      <Link href="/" className="flex gap-2">
        <TajAlrasLogo className="size-10 text-yellow-500" />
        <div className="font-bold text-2xl font-sans flex items-end">
          Taj Alras
        </div>
      </Link>

      <div className=" hidden gap-4 text-sm  md:flex">
        <nav
          role="navigation"
          className="flex items-center gap-6  font-serif *:hover:underline *:hover:text-primary *:ease-in-out"
        >
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        {/* <ModeToggle className="" /> */}
        <AnimatedThemeToggler />
      </div>
      <div className="flex items-center md:hidden">
        <MobileDropdown />
      </div>
    </header>
  );
}
