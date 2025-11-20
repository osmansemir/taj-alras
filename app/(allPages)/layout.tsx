import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
