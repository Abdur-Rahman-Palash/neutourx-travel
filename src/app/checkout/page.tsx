'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ShieldCheck, Lock, CreditCard, Apple, Smartphone, ArrowRight, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const formSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    country: z.string().min(2, "Country is required"),
    cardNumber: z.string().regex(/^\d{16}$/, "Invalid card number"),
    expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "MM/YY format"),
    cvc: z.string().regex(/^\d{3,4}$/, "Invalid CVC"),
});

type FormData = z.infer<typeof formSchema>;

export default function CheckoutPage() {
    const [complete, setComplete] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card');

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = (data: FormData) => {
        // Simulate API Call
        setTimeout(() => {
            setComplete(true);
        }, 1500);
    };

    if (complete) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-3xl p-12 text-center max-w-lg shadow-xl"
                >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-12 h-12 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-primary mb-4">Booking Confirmed!</h1>
                    <p className="text-gray-500 mb-8">Your trip to London has been successfully booked. A confirmation email has been sent to your inbox.</p>
                    <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-accent-cyan hover:text-primary transition-colors">
                        Go to Dashboard
                    </button>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Form */}
                <div className="lg:col-span-2 space-y-8">
                    <h1 className="text-3xl font-bold text-primary">Secure Checkout</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        {/* Traveler Details */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
                                Traveler Details
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                                    <input {...register('firstName')} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="John" />
                                    {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                    <input {...register('lastName')} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="Doe" />
                                    {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <input {...register('email')} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="john@example.com" />
                                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                    <input {...register('phone')} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                                    {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                                </div>
                            </div>
                        </section>

                        {/* Payment */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
                                Payment Method
                            </h2>

                            <div className="flex gap-4 mb-8">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('card')}
                                    className={`flex-1 p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-accent-cyan bg-accent-cyan/5 text-primary' : 'border-gray-200 hover:bg-gray-50'}`}
                                >
                                    <CreditCard className="w-6 h-6" />
                                    <span className="text-sm font-medium">Card</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('apple')}
                                    className={`flex-1 p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${paymentMethod === 'apple' ? 'border-black bg-black text-white' : 'border-gray-200 hover:bg-gray-50'}`}
                                >
                                    <Apple className="w-6 h-6" />
                                    <span className="text-sm font-medium">Apple Pay</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('google')}
                                    className={`flex-1 p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${paymentMethod === 'google' ? 'border-primary bg-primary text-white' : 'border-gray-200 hover:bg-gray-50'}`}
                                >
                                    <Smartphone className="w-6 h-6" />
                                    <span className="text-sm font-medium">Google Pay</span>
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Card Number</label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input {...register('cardNumber')} className="w-full p-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    {errors.cardNumber && <span className="text-xs text-red-500">{errors.cardNumber.message}</span>}
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Expiry Date</label>
                                        <input {...register('expiry')} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="MM/YY" />
                                        {errors.expiry && <span className="text-xs text-red-500">{errors.expiry.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">CVC</label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input {...register('cvc')} className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="123" />
                                        </div>
                                        {errors.cvc && <span className="text-xs text-red-500">{errors.cvc.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent-cyan hover:text-primary transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group text-lg">
                            Complete Booking <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                            <Lock className="w-3 h-3" />
                            Payments are processed securely via Stripe. 256-bit SSL Encrypted.
                        </div>
                    </form>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="sticky top-12 space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                            <h3 className="text-lg font-bold text-primary mb-6 border-b border-gray-100 pb-4">Order Summary</h3>

                            {/* Flight Item */}
                            <div className="flex justify-between mb-4">
                                <div>
                                    <p className="font-bold text-primary text-sm">Roundtrip Flight</p>
                                    <p className="text-xs text-gray-500">LHR - JFK • Oct 24-30</p>
                                </div>
                                <span className="font-semibold text-primary text-sm">£720.00</span>
                            </div>

                            {/* Hotel Item */}
                            <div className="flex justify-between mb-4">
                                <div>
                                    <p className="font-bold text-primary text-sm">The Ritz London</p>
                                    <p className="text-xs text-gray-500">5 Nights • Deluxe King</p>
                                </div>
                                <span className="font-semibold text-primary text-sm">£2,450.00</span>
                            </div>

                            {/* Taxes */}
                            <div className="flex justify-between pt-4 border-t border-gray-100 text-gray-500 text-sm">
                                <span>Taxes & Fees</span>
                                <span>£140.00</span>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between pt-4 border-t border-gray-100 items-end mt-4">
                                <span className="text-gray-500 font-medium">Total</span>
                                <span className="text-3xl font-black text-primary">£3,310.00</span>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm text-primary">Free Cancellation</h4>
                                        <p className="text-xs text-gray-500">Cancel up to 24h before your trip for a full refund.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Wallet className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm text-primary">Best Price Guarantee</h4>
                                        <p className="text-xs text-gray-500">Find a lower price? We'll match it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
