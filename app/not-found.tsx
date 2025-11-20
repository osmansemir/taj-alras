import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen text-2xl">
      <Empty>
        <EmptyHeader>
          <EmptyTitle className="text-4xl font-serif">
            404 - Not Found
          </EmptyTitle>
          <EmptyDescription className="text-xl">
            The page you&apos;re looking for doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <EmptyDescription className="text-xl">
            Go to <Link href="/">Home</Link>
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  );
}
