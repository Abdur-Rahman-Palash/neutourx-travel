'use client';

import {
    Clock,
    Shield,
    Car,
    Bed,
    ArrowRight,
    Plane,
    Briefcase,
    AlertCircle,
    CheckCircle
} from 'lucide-react';
import ProgressIndicator from '@/components/layout/ProgressIndicator';
import { motion } from 'framer-motion';

export default function FlightDetailsPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Sticky Summary Bar */}
            <div className="sticky top-0 bg-white border-b border-gray-100 shadow-sm z-40 py-4 px-6 md:px-12 backdrop-blur-md bg-white/95">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-lg text-primary">London (LHR)</span>
                        <div className="flex items-center gap-2 text-gray-300">
                            <div className="w-12 h-px bg-gray-300 relative">
                                <Plane className="w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-gray-400" />
                            </div>
                        </div>
                        <span className="font-bold text-lg text-primary">New York (JFK)</span>
                        <span className="text-sm text-gray-500 hidden md:inline-block border-l border-gray-200 pl-4 ml-4">
                            Thu, Oct 24 • British Airways
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <span className="text-xs text-gray-400 block">Total</span>
                            <span className="text-xl font-bold text-primary">£720.00</span>
                        </div>
                        <button className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-accent-cyan hover:text-primary transition-colors">
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <ProgressIndicator />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Flight Summary Card */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl font-bold text-primary mb-6">Flight Details</h2>

                            {/* Departure Flight */}
                            <div className="flex gap-4 md:gap-8 relative pb-8 border-l-2 border-dashed border-gray-200 ml-3 pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-white flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </div>
                                <div className="min-w-[70px]">
                                    <p className="text-2xl font-bold text-primary">10:15</p>
                                    <p className="text-sm text-gray-500">24 Oct</p>
                                </div>
                                <div>
                                    <p className="font-bold text-primary">London Heathrow (LHR)</p>
                                    <p className="text-sm text-gray-500">Terminal 5</p>
                                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg inline-flex">
                                        <Clock className="w-4 h-4" />
                                        <span>Duration: 7h 30m</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 md:gap-8 relative pt-2 ml-3 pl-8">
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-primary bg-primary" />
                                <div className="min-w-[70px]">
                                    <p className="text-2xl font-bold text-primary">16:45</p>
                                    <p className="text-sm text-gray-500">24 Oct</p>
                                </div>
                                <div>
                                    <p className="font-bold text-primary">New York (JFK)</p>
                                    <p className="text-sm text-gray-500">Terminal 7</p>
                                </div>
                            </div>

                            {/* Baggage Info */}
                            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="font-medium text-sm text-gray-700">Carry-on Included</p>
                                        <p className="text-xs text-gray-400">1 x 7kg</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-accent-cyan" />
                                    <div>
                                        <p className="font-medium text-sm text-gray-700">Checking Baggage Included</p>
                                        <p className="text-xs text-gray-400">2 x 23kg</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Refund Policy */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
                            <div className="bg-green-50 p-3 rounded-full">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary text-sm">Flexible Cancellation</h3>
                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                    Cancel up to 24 hours before departure for a full refund in travel credits.
                                    Change dates seamlessly with no administration fees.
                                </p>
                            </div>
                        </div>

                        {/* Upsell Modules */}
                        <h3 className="text-lg font-bold text-primary pt-4">Enhance Your Trip</h3>

                        {/* Insurance Upsell */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 p-6 transition-shadow hover:shadow-md cursor-pointer group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl h-fit">
                                        <Shield className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Comprehensive Travel Insurance</h4>
                                        <p className="text-sm text-gray-500 mt-1 max-w-sm">
                                            Coverage for medical emergencies, trip cancellations, and lost baggage.
                                        </p>
                                        <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" /> Recommended
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-primary text-lg">+£45</p>
                                    <button className="mt-2 text-sm text-accent-cyan font-medium hover:underline">View Details</button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Transfer Upsell */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 p-6 transition-shadow hover:shadow-md cursor-pointer group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className="bg-purple-50 p-3 rounded-xl h-fit">
                                        <Car className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Private Airport Transfer</h4>
                                        <p className="text-sm text-gray-500 mt-1 max-w-sm">
                                            Luxury sedan waiting for you at arrivals. Professional chauffeur service.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-primary text-lg">+£85</p>
                                    <button className="mt-2 px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">Add</button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hotel Upsell */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl border border-gray-100 p-6 transition-shadow hover:shadow-md cursor-pointer group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className="bg-orange-50 p-3 rounded-xl h-fit">
                                        <Bed className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Add Stay in New York</h4>
                                        <p className="text-sm text-gray-500 mt-1 max-w-sm">
                                            Unlock exclusive rates at purely 5-star properties when bundled.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-primary text-lg">Save 15%</p>
                                    <button className="mt-2 px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">Browse Hotels</button>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Booking Summary Sidebar (Right) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24 space-y-6">
                            <h3 className="font-bold text-primary text-lg border-b border-gray-100 pb-4">Fare Breakdown</h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Base Fare (x1 Adult)</span>
                                    <span>£580.00</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Taxes & Fees</span>
                                    <span>£140.00</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Discount</span>
                                    <span className="text-green-600">-£0.00</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                                <span className="font-bold text-primary text-lg">Total</span>
                                <span className="font-black text-2xl text-primary">£720.00</span>
                            </div>

                            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent-cyan hover:text-primary transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-accent-cyan/20">
                                Continue
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="bg-gray-50 p-3 rounded-lg flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5" />
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    <span className="font-bold text-gray-700">Price Lock:</span> Your fare is guaranteed for the next 15 minutes while you complete your booking.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
