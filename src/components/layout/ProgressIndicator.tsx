'use client';

import { CheckCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
    label: string;
    completed: boolean;
    current: boolean;
}

const steps: Step[] = [
    { label: "Flight Selection", completed: true, current: false },
    { label: "Add-Ons", completed: false, current: true },
    { label: "Traveler Details", completed: false, current: false },
    { label: "Payment", completed: false, current: false },
];

export default function ProgressIndicator() {
    return (
        <div className="flex items-center justify-between max-w-2xl mx-auto py-8">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative z-10">
                    <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                        step.completed ? "bg-primary border-primary text-white" :
                            step.current ? "bg-white border-primary text-primary" :
                                "bg-white border-gray-200 text-gray-300"
                    )}>
                        {step.completed ? <CheckCircle className="w-5 h-5" /> : <span>{index + 1}</span>}
                    </div>
                    <span className={cn(
                        "text-xs font-medium mt-2 absolute top-10 whitespace-nowrap",
                        step.current ? "text-primary" : "text-gray-400"
                    )}>
                        {step.label}
                    </span>

                    {/* Progress Line */}
                    {index < steps.length - 1 && (
                        <div className="absolute left-8 top-4 w-[calc(100vw/5)] md:w-32 h-0.5 -z-10 bg-gray-200">
                            <div className={cn(
                                "h-full bg-primary transition-all duration-500",
                                step.completed ? "w-full" : "w-0"
                            )} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
