import { Skeleton } from "../ui/skeleton";

export default function SidebarSkeleton() {
  return (
    <div className="pt-5 flex flex-col items-end gap-2 px-4">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} className="w-full h-5" />
        ))}
    </div>
  );
}
