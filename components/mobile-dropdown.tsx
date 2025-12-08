import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { AnimatedThemeToggler } from "./animated-theme-toggle";

export default function MobileDropdown() {
  return (
    <nav role="navigation">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
          <span className="sr-only">navigation menu</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/products">Products</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/#contact">Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AnimatedThemeToggler />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
