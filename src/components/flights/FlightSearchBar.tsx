'use client';

import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function FlightSearchBar() {
    return (
        <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm py-4 px-6 md:px-12 backdrop-blur-md bg-white/90">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Route Info */}
                <div className="flex items-center gap-4 flex-1 w-full">
                    <div className="flex-1 bg-gray-50 rounded-lg p-2 flex items-center gap-3 border border-gray-100">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <span>LHR</span>
                            <span className="text-gray-300">→</span>
                            <span>JFK</span>
                        </div>
                    </div>

                    <div className="flex-1 bg-gray-50 rounded-lg p-2 flex items-center gap-3 border border-gray-100">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium">Oct 24 - Nov 02</span>
                    </div>

                    <div className="hidden md:flex bg-gray-50 rounded-lg p-2 items-center gap-3 border border-gray-100 px-4">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium">2 Travelers</span>
                    </div>
                </div>

                {/* Edit Search Button */}
                <button className="w-full md:w-auto px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-accent-cyan hover:text-primary transition-colors flex items-center justify-center gap-2">
                    <Search className="w-4 h-4" />
                    Modify Search
                </button>
            </div>
        </div>
    );
}
