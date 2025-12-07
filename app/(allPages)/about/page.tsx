import Image from "next/image";

export default function About() {
  return (
    <main role="main" className="flex items-center justify-center flex-1 pb-10">
      <div className="prose dark:prose-invert flex flex-col w-9/10 lg:w-1/2">
        <div className="relative  w-full h-100 mb-15">
          <Image
            alt="Two men shaking hands"
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
            fill
            className="z-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            objectFit="cover"
          />
        </div>
        <h1 className="font-sans text-3xl">
          Taj Alras Goods wholesalers L.L.C
        </h1>
        <p>
          Taj Alras began its journey in 2003 under the name Fly General
          Trading. What started as a small trading company steadily grew into a
          dependable wholesale supplier known for reliability, quality, and
          strong business partnerships. As the company evolved and expanded its
          operations, the name was changed to Taj Alras to better reflect its
          renewed vision and broader reach in the wholesale market.
        </p>
        <p>
          Throughout the years, we have maintained a clear focus: providing
          businesses with consistent access to high-quality goods at competitive
          prices. Our growth has been built on trust, transparency, and a
          commitment to delivering value—whether serving retailers,
          distributors, or commercial clients.
        </p>
        <p>
          The transition from Fly General Trading to Taj Alras marked more than
          a name change; it represented our dedication to progress, improved
          service, and a wider product range backed by efficient logistics.
          Today, Taj Alras continues to operate with the same spirit that
          defined its beginnings, strengthened by decades of experience in the
          market.
        </p>
        <p>
          With a strong supplier network, reliable delivery systems, and a
          customer-first approach, Taj Alras remains committed to supporting
          businesses with integrity and long-term partnership.
        </p>
      </div>
    </main>
  );
}
