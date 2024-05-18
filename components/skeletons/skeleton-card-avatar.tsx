import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCardAvatar() {
  return (
    <div>
      <Skeleton className="w-[70px] h-[70px] rounded-full animate-pulse" />
    </div>
  );
}
