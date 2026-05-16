export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ backgroundColor: 'var(--color-border)' }}
    />
  );
}

export function DestinationCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <Skeleton className="h-64 w-full" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-8 w-1/2 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </section>
  );
}

export function SectionSkeleton() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="h-12 w-3/4 rounded-full bg-slate-800 animate-pulse" />
        <div className="h-5 w-2/3 rounded-full bg-slate-800 animate-pulse" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-80 rounded-[2rem] bg-slate-800 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
