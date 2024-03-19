import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <main className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </main>
  );
}

export function SkeletonMessage() {
  return (
    <main className="flex items-center space-x-4 w-[350px] my-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </main>
  );
}

export function SkeletonEvent() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
    </div>
  );
}
