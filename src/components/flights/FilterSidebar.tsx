'use client';

import { Check, Info, Sliders } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const stops = [
    { label: "Non-stop", count: 12 },
    { label: "1 Stop", count: 24 },
    { label: "2+ Stops", count: 5 }
];

const airlines = [
    { name: "British Airways", price: "£670" },
    { name: "Virgin Atlantic", price: "£720" },
    { name: "American Airlines", price: "£650" },
    { name: "Emirates", price: "£850" },
];

const times = [
    { label: "Morning (06:00 - 11:59)", icon: "☀️" },
    { label: "Afternoon (12:00 - 17:59)", icon: "🌤️" },
    { label: "Evening (18:00 - 23:59)", icon: "🌙" },
];

export default function FilterSidebar() {
    const [selectedStops, setSelectedStops] = useState<string[]>([]);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleStop = (label: string) => {
        if (selectedStops.includes(label)) {
            setSelectedStops(selectedStops.filter(s => s !== label));
        } else {
            setSelectedStops([...selectedStops, label]);
        }
    };

    return (
        <aside className="w-full lg:w-72 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-lg text-primary font-medium"
                >
                    <Sliders className="w-4 h-4" />
                    Filters
                </button>
            </div>

            {/* Sticky Sidebar Content */}
            <div className={cn(
                "sticky top-24 space-y-8 lg:block bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all overflow-y-auto max-h-[calc(100vh-120px)] no-scrollbar",
                isMobileOpen ? "block fixed inset-0 z-50 overflow-y-auto m-0 rounded-none top-0 h-screen w-screen" : "hidden"
            )}>
                {/* Mobile Header */}
                <div className="lg:hidden flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button onClick={() => setIsMobileOpen(false)} className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-500">Close</button>
                </div>

                {/* Reset Button */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg text-primary">Filters</h3>
                    <button className="text-sm text-accent-cyan hover:underline">Reset All</button>
                </div>

                {/* Stops Filter */}
                <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400">Stops</h4>
                    {stops.map(stop => (
                        <label key={stop.label} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div
                                    className={cn(
                                        "w-5 h-5 rounded border border-gray-300 flex items-center justify-center transition-colors",
                                        selectedStops.includes(stop.label) ? "bg-primary border-primary" : "group-hover:border-primary"
                                    )}
                                >
                                    {selectedStops.includes(stop.label) && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <span className="text-sm font-medium text-gray-700">{stop.label}</span>
                            </div>
                            <span className="text-xs text-gray-400">from £{Math.floor(Math.random() * 200) + 500}</span>

                            {/* Hidden native checkbox */}
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedStops.includes(stop.label)}
                                onChange={() => toggleStop(stop.label)}
                            />
                        </label>
                    ))}
                </div>

                {/* Departure Time */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400">Departure Time</h4>
                    <div className="grid grid-cols-1 gap-2">
                        {times.map((time) => (
                            <button key={time.label} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent-cyan/50 hover:bg-gray-50 transition-all text-left">
                                <span className="text-lg">{time.icon}</span>
                                <span className="text-xs font-medium text-gray-600">{time.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Airlines */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400">Airlines</h4>
                    {airlines.map((airline) => (
                        <label key={airline.name} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="accent-primary w-4 h-4 rounded border-gray-300" />
                                <span className="text-sm font-medium text-gray-700">{airline.name}</span>
                            </div>
                            <span className="text-xs text-gray-400">{airline.price}</span>
                        </label>
                    ))}
                </div>

                {/* Baggage & Flexibility */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400">Flexibility</h4>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative flex items-center">
                            <input type="checkbox" className="peer sr-only" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-cyan"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700">Refundable Fares Only</span>
                            <span className="text-xs text-gray-400">Free changes included</span>
                        </div>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative flex items-center">
                            <input type="checkbox" className="peer sr-only" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700">Checked Baggage Included</span>
                            <span className="text-xs text-gray-400">Usually +$50 value</span>
                        </div>
                    </label>
                </div>

                {/* Price Confidence Tooltip/Info */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 border border-blue-100 mt-6">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h5 className="text-sm font-bold text-blue-900">Price Confidence</h5>
                        <p className="text-xs text-blue-700 mt-1">
                            No hidden booking fees. The price you see is what you pay.
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
