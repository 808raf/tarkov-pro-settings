import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonPlayerPage() {
  return (
    <div>
      <div className="container mt-10 max-w-7xl mb-14">
        <Skeleton className="rounded-lg min-w-[300px] min-h-96 animate-pulse" />
      </div>
      <div className="container mt-10 max-w-7xl mb-14">
        <Skeleton className="h-10 w-[200px] animate-pulse" />
      </div>
      <div className="container mt-10 max-w-7xl mb-14">
        <Skeleton className="h-[212px] w-full animate-pulse" />
      </div>
      <div className="container mt-10 max-w-7xl mb-14">
        <Skeleton className="h-[212px] w-full animate-pulse" />
      </div>
      <div className="container mt-10 max-w-7xl mb-14">
        <Skeleton className="h-[212px] w-full animate-pulse" />
      </div>
      <div className="container mt-10 max-w-7xl mb-14">
        <Skeleton className="h-[212px] w-full animate-pulse" />
      </div>
    </div>
  );
}
