import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { geistMono, geistSans } from "@/app/fonts";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb className="grow">
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Products</BreadcrumbLink>
                  </BreadcrumbItem>
                  {/* <BreadcrumbSeparator className="hidden md:block" /> */}
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
