import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function RecommendationSkeleton({ delay }) {
  return (
    <div 
      className="flex flex-col gap-8 w-[240px] md:w-[320px] animate-in fade-in duration-500" 
      style={{ animationDelay: delay }}
    >
      <Skeleton className="w-full aspect-square rounded-[3.5rem]" />
      <div className="space-y-3 px-6">
        <Skeleton className="h-4 w-1/3 rounded-full opacity-20" />
        <Skeleton className="h-10 w-full rounded-2xl" />
      </div>
    </div>
  );
}
