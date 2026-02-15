export default function FlightSkeleton() {
    return (
        <div className="w-full bg-white rounded-2xl border border-gray-100 p-6 animate-pulse space-y-4 shadow-sm">
            <div className="flex justify-between items-center gap-4">
                {/* Airline */}
                <div className="flex items-center gap-4 w-1/4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div className="space-y-2">
                        <div className="w-24 h-4 bg-gray-200 rounded" />
                        <div className="w-16 h-3 bg-gray-100 rounded" />
                    </div>
                </div>

                {/* Route */}
                <div className="flex-1 px-8 space-y-2">
                    <div className="flex justify-between">
                        <div className="w-16 h-6 bg-gray-200 rounded" />
                        <div className="w-16 h-6 bg-gray-200 rounded" />
                    </div>
                    <div className="w-full h-px bg-gray-200 relative" />
                    <div className="w-24 h-3 bg-gray-100 mx-auto rounded" />
                </div>

                {/* Price */}
                <div className="w-1/4 flex flex-col items-end gap-2 pl-6 border-l border-gray-100">
                    <div className="w-16 h-3 bg-gray-100 rounded" />
                    <div className="w-24 h-8 bg-gray-200 rounded" />
                    <div className="w-full h-10 bg-gray-200 rounded-lg mt-2" />
                </div>
            </div>
        </div>
    );
}
