import { Skeleton } from "../ui/skeleton";

export default function ProductSkeleton({
  numberOfItems,
}: {
  numberOfItems: number;
}) {
  return (
    <div className="w-full justify-around mx-auto p-10 gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <div
            key={"ProductSkeleton: " + index}
            className="flex flex-col space-y-3"
          >
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2 w-3/4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
    </div>
  );
}
