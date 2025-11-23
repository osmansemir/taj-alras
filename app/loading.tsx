import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex justify-center h-screen w-full items-center">
      <Spinner className="size-35" />
    </div>
  );
}
