'use client';

import { useState } from 'react';
import { PackageData, BuilderStep, steps } from '../../components/builder/constants';
import BuilderProgress from '../../components/builder/BuilderProgress';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// Step Content Imports (Assuming we define them inline or mock them for now)
const StepDestination = ({ onSelect }: { onSelect: (dest: string) => void }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Dubai", "London", "Tokyo", "Bali", "Paris", "New York"].map(loc => (
            <motion.div
                key={loc}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.02] cursor-pointer transition-all duration-300 relative h-64 group"
                onClick={() => onSelect(loc)}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Image src={`https://source.unsplash.com/random/800x600/?${loc}`} alt={loc} fill className="object-cover -z-10" />
                <div className="absolute bottom-6 left-6 text-white font-bold text-2xl group-hover:pl-2 transition-all">{loc}</div>
            </motion.div>
        ))}
    </div>
);

// ... (Other steps would be similar separate components, but mocked here for breivity)

export default function PackageBuilderPage() {
    const [step, setStep] = useState<BuilderStep>("destination");
    const [data, setData] = useState<PackageData>({
        destination: null,
        flight: null,
        hotel: null,
        tours: [],
        travelers: 1,
        dates: { start: null, end: null }
    });

    const goToNext = () => {
        const idx = steps.findIndex(s => s.id === step);
        if (idx < steps.length - 1) {
            setStep(steps[idx + 1].id);
        }
    };

    const goToPrev = () => {
        const idx = steps.findIndex(s => s.id === step);
        if (idx > 0) {
            setStep(steps[idx - 1].id);
        }
    };

    const currentStepIndex = steps.findIndex(s => s.id === step);
    const progress = (currentStepIndex / (steps.length - 1)) * 100;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <BuilderProgress currentStep={step} />

            <div className="flex-1 max-w-7xl mx-auto px-6 w-full py-12 flex items-start gap-12 relative">

                {/* Main Content Area */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[600px] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6 capitalize">{steps.find(s => s.id === step)?.label}</h2>

                            {step === "destination" && (
                                <StepDestination onSelect={(dest) => { setData({ ...data, destination: dest }); goToNext(); }} />
                            )}

                            {step === "flights" && (
                                <div className="space-y-4">
                                    <p className="text-gray-500">Pick the best connection for your journey.</p>
                                    <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Flight Selection Module Placeholder</div>
                                    <button onClick={goToNext} className="btn-primary mt-4">Simulate Selection</button>
                                </div>
                            )}

                            {step === "hotel" && (
                                <div className="space-y-4">
                                    <p className="text-gray-500">Curated 5-star properties in {data.destination || 'your destination'}.</p>
                                    <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Hotel Selection Module Placeholder</div>
                                    <button onClick={goToNext} className="btn-primary mt-4">Simulate Selection</button>
                                </div>
                            )}

                            {step === "tours" && (
                                <div className="space-y-4">
                                    <p className="text-gray-500">Add exclusive experiences.</p>
                                    <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Tours Selection Module Placeholder</div>
                                    <button onClick={goToNext} className="btn-primary mt-4">Simulate Selection</button>
                                </div>
                            )}

                            {step === "review" && (
                                <div className="space-y-4">
                                    <p className="text-gray-500">Review your bespoke itinerary.</p>
                                    <div className="bg-gray-50 p-6 rounded-xl space-y-2">
                                        <p><strong>Destination:</strong> {data.destination}</p>
                                        <p><strong>Flight:</strong> Selected</p>
                                        <p><strong>Hotel:</strong> Selected</p>
                                    </div>
                                    <button className="w-full py-4 bg-accent-cyan text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-lg shadow-accent-cyan/20 active:scale-95 duration-200 mt-8">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Sticky Price Summary (Right Sidebar) */}
                <div className="w-96 sticky top-32">
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-cyan" />
                        <h3 className="text-lg font-bold text-primary mb-6">Trip Summary</h3>

                        <div className="space-y-4 text-sm border-b border-gray-100 pb-6 mb-6">
                            <div className="flex justify-between items-center text-gray-600">
                                <span>Flights</span>
                                <span className="font-semibold text-primary">£720</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600">
                                <span>Hotel (5 Ni)</span>
                                <span className="font-semibold text-primary">£2,450</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600">
                                <span>Tours</span>
                                <span className="font-semibold text-primary">£450</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600">
                                <span>Taxes & Fees</span>
                                <span className="font-semibold text-primary">£140</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Total Price</p>
                                <p className="text-3xl font-black text-primary">£3,760</p>
                            </div>
                            <p className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">Save £420</p>
                        </div>

                        <div className="flex gap-4">
                            {step !== "destination" && (
                                <button onClick={goToPrev} className="flex-1 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </button>
                            )}
                            {step !== "review" && (
                                <button
                                    onClick={goToNext}
                                    className="flex-[2] py-3 bg-primary text-white font-bold rounded-xl hover:bg-accent-cyan hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    disabled={step === "destination" && !data.destination}
                                >
                                    Continue <ArrowRight className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
