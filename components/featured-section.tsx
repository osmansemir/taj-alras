import { getFeaturedProducts } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/card-dialog";

export default async function FeaturedSection() {
  const products = await getFeaturedProducts();
  return (
    <section className="w-full flex flex-col bg-card py-10 px-10 space-y-10 ">
      <h2 className="text-lg max-md:text-center">FEATURED PRODUCTS</h2>
      <div className="flex justify-around overflow-auto gap-3">
        {products.map((product, i) => {
          return (
            <div key={i}>
              <Dialog
                transition={{
                  type: "spring",
                  bounce: 0.05,
                  duration: 0.5,
                }}
              >
                <DialogTrigger className="flex shadow-sm hover:shadow-xl shrink-0 w-50 md:w-75 flex-col overflow-hidden border  bg-background hover:bg-secondary">
                  <DialogImage
                    src={product.img}
                    alt=""
                    className="h-36 md:h-50 w-full object-cover"
                  />
                  <div className="flex grow flex-row items-end justify-between p-3">
                    <div>
                      <DialogTitle className="h-19 md:h-14 font-sans font-bold text-xl">
                        {product.name.replace(/\b\w/g, (str) =>
                          str.toUpperCase(),
                        )}
                      </DialogTitle>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContainer className="pt-10" overlayClassName="">
                  <DialogContent className="relative flex w-9/10 md:w-xl min-h-100 max-h-full mx-auto flex-col overflow-y-auto py-5 border bg-background  ">
                    <DialogImage
                      src={product.img}
                      alt=""
                      className="h-50 md:h-60  object-contain mx-auto"
                    />
                    <div className="p-6">
                      <DialogTitle className="text-3xl font-bold font-sans">
                        {product.name.replace(/\b\w/g, (str) =>
                          str.toUpperCase(),
                        )}
                      </DialogTitle>

                      <DialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: -40 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: -50 },
                        }}
                      >
                        <p className="mt-2 ">{product.desc}</p>
                      </DialogDescription>
                    </div>
                    <DialogClose className="  bg-primary p-4 hover:bg-primary/90" />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            </div>
          );
        })}
      </div>
      <Button variant="outline" size="lg" className="md:mx-auto" asChild>
        <Link href="/products">See All Products</Link>
      </Button>
    </section>
  );
}
