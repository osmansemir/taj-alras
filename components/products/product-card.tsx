import Image from "next/image";
import { cn } from "@/lib/utils";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={cn(
        " flex flex-col min-h-75 ",
        "border border-secondary dark:border-primary",
        "hover:ease-in-out duration-150 hover:scale-102 ",
        " shadow-md/20 dark:shadow-3xl dark:shadow-cyan-600 ",
      )}
    >
      <div className="relative w-full aspect-3/2 ">
        <Image
          alt={`${product.name}-image`}
          src={product.img}
          fill
          className="z-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className=" w-full flex flex-col h-full">
        <h4 className=" pt-2 pl-2 text-2xl font-bold">
          {product.name.replace(/\b\w/g, (str) => str.toUpperCase())}
        </h4>
        <p className="font-serif pb-4 p-2 text-sm/4 text-muted-foreground flex-1">
          {product.desc}
        </p>
      </div>
    </div>
  );
}
