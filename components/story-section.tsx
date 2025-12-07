import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <section className="w-full sm:w-8/10 md:w-full min-h-100 px-5 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
      <div className=" md:flex items-center hidden">
        <div className="relative  w-full h-full">
          <Image
            alt="Two men shaking hands"
            src="https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg"
            fill
            className="z-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="font text-lg max-md:text-center">OUR STORY</h3>
        <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl text-pretty">
          A Legacy of Reliable Supply
        </h2>
        <div className="md:hidden">
          <div className="relative aspect-3/2 w-full ">
            <Image
              alt="Two men shaking hands"
              src="https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg"
              fill
              className="z-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        </div>
        <p className="">
          Since 2003, Taj Alras has earned the trust of its customers through a
          strong global supplier network and consistently reliable service. We
          pay attention to every detail and stand by our partners—quality you
          can rely on, trust you can count on.
        </p>
        <Link href="/about" className="hover:underline">
          Read More
        </Link>
      </div>
    </section>
  );
}
