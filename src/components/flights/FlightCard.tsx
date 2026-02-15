'use client';

import { ArrowRight, Clock, Plane, Info, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Flight {
    id: string;
    airline: string;
    logo: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    stops: number;
    stopAirport?: string;
    price: number;
    badges?: string[];
}

interface FlightCardProps {
    flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-accent-cyan/30 transition-all duration-300 relative overflow-hidden"
        >
            {/* Top Badge Row */}
            {flight.badges && flight.badges.length > 0 && (
                <div className="flex gap-2 mb-4">
                    {flight.badges.map((badge, index) => (
                        <span key={index} className="px-2 py-0.5 bg-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-wider rounded-full">
                            {badge}
                        </span>
                    ))}
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
                {/* Airline Info */}
                <div className="flex items-center gap-4 w-full md:w-1/4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center font-bold text-primary text-xs border border-gray-100">
                        {flight.logo}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">{flight.airline}</h4>
                        <span className="text-xs text-gray-400">Airbus A350</span>
                    </div>
                </div>

                {/* Flight Schedule */}
                <div className="flex items-center gap-6 w-full md:w-1/2 justify-center px-4">
                    <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{flight.departureTime}</p>
                        <p className="text-xs text-gray-400">LHR</p>
                    </div>

                    <div className="flex-1 flex flex-col items-center gap-1 min-w-[100px]">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {flight.duration}
                        </span>
                        <div className="w-full h-px bg-gray-200 relative flex items-center justify-center">
                            <div className="w-full absolute h-px bg-gray-200" />
                            <Plane className="w-4 h-4 text-accent-cyan absolute bg-white px-0.5 rotate-90" />
                        </div>
                        <span className="text-xs text-gray-500 font-medium">
                            {flight.stops === 0 ? (
                                <span className="text-green-600">Non-stop</span>
                            ) : (
                                <span className="text-orange-500">{flight.stops} Stop{flight.stops > 1 ? 's' : ''} {flight.stopAirport && `(${flight.stopAirport})`}</span>
                            )}
                        </span>
                    </div>

                    <div className="text-left">
                        <p className="text-2xl font-bold text-gray-900">{flight.arrivalTime}</p>
                        <p className="text-xs text-gray-400">JFK</p>
                    </div>
                </div>

                {/* Price & Action */}
                <div className="flex flex-col items-end gap-2 w-full md:w-1/4 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-6">
                    <div className="text-right">
                        <span className="text-xs text-gray-400 block">Total Price</span>
                        <span className="text-2xl font-black text-primary">£{flight.price}</span>
                    </div>
                    <button className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent-cyan hover:text-primary transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95 duration-200">
                        Select Flight
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Expanded Details Hint */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-[10px] text-gray-400 flex items-center gap-1 hover:text-accent-cyan">
                    Flight Details <MoreHorizontal className="w-3 h-3" />
                </button>
            </div>
        </motion.div>
    );
}
