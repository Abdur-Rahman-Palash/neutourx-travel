'use client';

import {
    LayoutDashboard,
    Plane,
    Heart,
    Bell,
    User,
    HelpCircle,
    LogOut,
    Menu
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: Plane, label: 'My Trips', href: '/dashboard/trips' },
    { icon: Heart, label: 'Saved', href: '/dashboard/saved' },
    { icon: Bell, label: 'Price Alerts', href: '/dashboard/alerts' },
    { icon: User, label: 'Profile', href: '/dashboard/profile' },
    { icon: HelpCircle, label: 'Support', href: '/dashboard/support' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-3 bg-white rounded-full shadow-lg border border-gray-100"
                >
                    <Menu className="w-6 h-6 text-primary" />
                </button>
            </div>

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-100 transform transition-transform duration-300 lg:translate-x-0 lg:static",
                isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
            )}>
                <div className="h-full flex flex-col p-6">
                    <div className="mb-10 px-2">
                        <span className="text-2xl font-black tracking-[0.2em] text-primary">NEUTOURX</span>
                    </div>

                    <nav className="flex-1 space-y-1">
                        {sidebarItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                                        isActive
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                                    )}
                                >
                                    <Icon className={cn("w-5 h-5 transition-colors", isActive ? "text-accent-cyan" : "text-gray-400 group-hover:text-primary")} />
                                    <span className="relative z-10">{item.label}</span>
                                    {isActive && <motion.div layoutId="activedb" className="absolute inset-0 bg-primary -z-0 rounded-xl" />}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="pt-6 border-t border-gray-100 mt-6">
                        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors w-full">
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-30 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 p-6 lg:p-12 overflow-y-auto h-screen">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
