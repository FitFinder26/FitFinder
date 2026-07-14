import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SearchSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16 pt-4">
            {Array.from({ length: 9 }).map((_, idx) => (
                <Card 
                    key={idx} 
                    className="border-none bg-muted/5 rounded-[4rem] overflow-hidden shadow-none animate-in fade-in duration-500" 
                    style={{ animationDelay: `${idx * 0.1}s` }}
                >
                    <Skeleton className="w-full aspect-[4/5]" />
                    <CardContent className="p-10 space-y-6">
                        <Skeleton className="h-10 w-full rounded-2xl" />
                        <div className="flex justify-between items-center pt-4">
                            <div className="space-y-2 w-1/3">
                                <Skeleton className="h-4 w-1/2 rounded-full" />
                                <Skeleton className="h-10 w-full rounded-xl" />
                            </div>
                            <Skeleton className="h-8 w-1/4 rounded-2xl" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
