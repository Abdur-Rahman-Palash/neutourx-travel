'use client';

import { motion } from 'framer-motion';
import { PackageData, BuilderStep, steps } from '@/components/builder/constants';
import { Check } from 'lucide-react';

interface Props {
    currentStep: BuilderStep;
}

export default function BuilderProgress({ currentStep }: Props) {
    const currentIndex = steps.findIndex(s => s.id === currentStep);

    return (
        <div className="py-8 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center justify-between relative">
                    {/* Background Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 rounded-full" />

                    {/* Active Progress Line */}
                    <motion.div
                        className="absolute top-1/2 left-0 h-1 bg-accent-cyan -z-10 rounded-full origin-left"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    {steps.map((step, idx) => {
                        const isCompleted = idx < currentIndex;
                        const isCurrent = idx === currentIndex;

                        return (
                            <div key={step.id} className="flex flex-col items-center gap-2 relative">
                                <motion.div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 z-10 bg-white ${isCompleted || isCurrent
                                        ? "border-accent-cyan text-primary"
                                        : "border-gray-200 text-gray-300"
                                        } ${isCompleted ? "bg-accent-cyan border-accent-cyan text-white" : ""}`}
                                    initial={false}
                                    animate={{ scale: isCurrent ? 1.1 : 1 }}
                                >
                                    {isCompleted ? <Check className="w-5 h-5" /> : <span>{idx + 1}</span>}
                                </motion.div>
                                <span className={`text-xs font-medium absolute top-12 whitespace-nowrap transition-colors duration-300 ${isCurrent ? "text-primary font-bold" : "text-gray-400"
                                    }`}>
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
