'use client';

import { useState, useEffect } from 'react';
import { ArrowUpDown, ShieldCheck } from 'lucide-react';
import FlightSearchBar from '@/components/flights/FlightSearchBar';
import FilterSidebar from '@/components/flights/FilterSidebar';
import FlightCard from '@/components/flights/FlightCard';
import FlightSkeleton from '@/components/flights/FlightSkeleton';

const mockFlights = [
    {
        id: "f1",
        airline: "Emirates",
        logo: "EK",
        badges: ["Best Value"],
        departureTime: "08:45",
        arrivalTime: "15:20",
        duration: "7h 35m",
        stops: 0,
        price: 685,
    },
    {
        id: "f2",
        airline: "British Airways",
        logo: "BA",
        badges: ["Fastest"],
        departureTime: "10:15",
        arrivalTime: "16:45",
        duration: "7h 30m",
        stops: 0,
        price: 720,
    },
    {
        id: "f3",
        airline: "Virgin Atlantic",
        logo: "VS",
        departureTime: "11:30",
        arrivalTime: "18:15",
        duration: "7h 45m",
        stops: 0,
        price: 710,
    },
    {
        id: "f4",
        airline: "American Airlines",
        logo: "AA",
        departureTime: "14:00",
        arrivalTime: "21:00",
        duration: "8h 00m",
        stops: 1,
        stopAirport: "PHL",
        price: 650,
    },
    {
        id: "f5",
        airline: "Delta Airlines",
        logo: "DL",
        departureTime: "16:20",
        arrivalTime: "23:10",
        duration: "7h 50m",
        stops: 0,
        price: 745,
    },
    {
        id: "f6",
        airline: "Norse Atlantic",
        logo: "N0",
        departureTime: "13:00",
        arrivalTime: "20:00",
        badges: ["Cheapest"],
        stops: 0,
        duration: "8h 00m",
        price: 450,
    }
];

export default function FlightsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [sortOption, setSortOption] = useState("Best");

    // Simulate loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5s simulated loading
        return () => clearTimeout(timer);
    }, []);

    const sortedFlights = [...mockFlights].sort((a, b) => {
        if (sortOption === "Cheapest") return a.price - b.price;
        if (sortOption === "Fastest") return parseInt(a.duration) - parseInt(b.duration); // naive
        return 0; // "Best" default
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <FlightSearchBar />

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Left Sidebar */}
                <div className="lg:col-span-1">
                    <FilterSidebar />
                </div>

                {/* Right Content - Search Results */}
                <div className="lg:col-span-3 space-y-6">

                    {/* Header / Sorting */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-20 z-30 lg:top-0 lg:relative lg:z-0">
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-primary">
                                London (LHR) to New York (JFK)
                            </h1>
                            <span className="text-sm text-gray-500">
                                {mockFlights.length} flights found • <span className="text-green-600 font-medium">Prices include taxes</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium border border-green-100">
                                <ShieldCheck className="w-3 h-3" />
                                No Hidden Fees
                            </div>

                            <div className="relative group">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                                    Sort by: <span className="text-primary font-bold">{sortOption}</span>
                                    <ArrowUpDown className="w-4 h-4 ml-1" />
                                </button>
                                {/* Dropdown - Simple hover implementation for now */}
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden hidden group-hover:block z-50 animate-in fade-in zoom-in-95 duration-200">
                                    {['Best', 'Cheapest', 'Fastest'].map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setSortOption(opt)}
                                            className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flights List */}
                    <div className="space-y-4">
                        {isLoading ? (
                            // Show 3 skeleton cards while loading
                            Array.from({ length: 3 }).map((_, i) => (
                                <FlightSkeleton key={i} />
                            ))
                        ) : (
                            sortedFlights.map((flight) => (
                                <div
                                    key={flight.id}
                                // @ts-ignore - Temporary fix for TS generic type inference on custom component if any
                                >
                                    <FlightCard flight={flight} />
                                </div>
                            ))
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}
