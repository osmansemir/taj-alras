import { generateRandomWidth } from "@/lib/utils";
import { SidebarMenuSkeleton } from "../ui/sidebar";

export default function SidebarSkeleton() {
  return (
    <div className="pt-5 flex flex-col items-end gap-2 px-4">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <SidebarMenuSkeleton
            key={index}
            className="w-full h-5"
            width={`${generateRandomWidth()}`}
          />
        ))}
    </div>
  );
}
