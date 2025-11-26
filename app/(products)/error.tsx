"use client"; // Required: Error boundaries MUST be Client Components

import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route Segment Error Caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center flex-1 ">
      <div className="flex flex-col items-center gap-4">
        <CircleAlert className="size-20 text-red-700" />
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
          Something Went Wrong!
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We encountered an unexpected issue while loading this page.
        </p>
      </div>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
}
