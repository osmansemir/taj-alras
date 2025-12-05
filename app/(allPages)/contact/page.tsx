import Link from "next/link";

export default function Contact() {
  return (
    <main role="main" className="flex items-center justify-center flex-1">
      <div className="flex flex-col w-9/10 lg:w-1/2 prose dark:prose-invert">
        <h1 className="font-sans text-3xl">Contact</h1>
        <p>Please Contact us if you have any questions or concerns.</p>
        <Link href="mailto:admin@tajalras.net">info@tajalras.net</Link>
      </div>
    </main>
  );
}
