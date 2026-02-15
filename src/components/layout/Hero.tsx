'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, Search, Plane, Map, Package, Building2, Calendar, User, UserCheck, Sparkles, Globe, Star, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const searchTabs = [
    { id: 'flights', label: 'Flights', icon: Plane, description: 'Find your perfect flight' },
    { id: 'tours', label: 'Tours', icon: Map, description: 'Discover amazing experiences' },
    { id: 'packages', label: 'Packages', icon: Package, description: 'All-in-one deals' },
    { id: 'hotels', label: 'Hotels', icon: Building2, description: 'Comfortable stays' },
];

const stats = [
    { value: '2M+', label: 'Happy Travelers' },
    { value: '150+', label: 'Destinations' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '24/7', label: 'Support' },
];

export default function Hero() {
    const [activeTab, setActiveTab] = useState('flights');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [searchData, setSearchData] = useState({
        from: '',
        to: '',
        depart: '',
        return: '',
        travelers: '1',
        class: 'Economy'
    });
    const [showValidationError, setShowValidationError] = useState(false);
    const [fromSuggestions, setFromSuggestions] = useState<string[]>([]);
    const [toSuggestions, setToSuggestions] = useState<string[]>([]);
    const [showFromSuggestions, setShowFromSuggestions] = useState(false);
    const [showToSuggestions, setShowToSuggestions] = useState(false);
    const [videoTestResult, setVideoTestResult] = useState<string>('');
    const heroRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(heroRef, { once: false });

    // Test if bgvideo.mp4 is accessible
    useEffect(() => {
        const testVideoFile = async () => {
            try {
                const response = await fetch('/bgvideo.mp4', { method: 'HEAD' });
                if (response.ok) {
                    setVideoTestResult('✅ bgvideo.mp4 is accessible!');
                    console.log('✅ bgvideo.mp4 file found and accessible');
                } else {
                    setVideoTestResult('❌ bgvideo.mp4 not found');
                    console.log('❌ bgvideo.mp4 file not accessible');
                }
            } catch (error) {
                setVideoTestResult('❌ Error accessing bgvideo.mp4');
                console.log('❌ Error checking bgvideo.mp4:', error);
            }
        };
        
        testVideoFile();
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (videoRef.current) {
            tl.fromTo(videoRef.current,
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 0.7, duration: 2.5, ease: 'power2.out' }
            );
        }

        if (contentRef.current) {
            tl.fromTo(Array.from(contentRef.current.children),
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=2"
            );
        }

        if (statsRef.current) {
            tl.fromTo(Array.from(statsRef.current.children),
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                "-=1.5"
            );
        }

        // Enhanced parallax effect
        if (videoRef.current && heroRef.current) {
            gsap.to(videoRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
                y: 200,
                scale: 1.15,
            });
        }
    }, []);

    // Mouse tracking for interactive effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Mock airport and city data
    const airportsAndCities = [
        // Major US Cities
        'New York (JFK)', 'New York (LGA)', 'New York (EWR)', 'Los Angeles (LAX)', 'Chicago (ORD)', 
        'San Francisco (SFO)', 'Miami (MIA)', 'Boston (BOS)', 'Seattle (SEA)', 'Las Vegas (LAS)',
        'Denver (DEN)', 'Atlanta (ATL)', 'Dallas (DFW)', 'Houston (IAH)', 'Phoenix (PHX)',
        // International Cities
        'London (LHR)', 'London (LGW)', 'Paris (CDG)', 'Tokyo (NRT)', 'Tokyo (HND)', 
        'Dubai (DXB)', 'Singapore (SIN)', 'Hong Kong (HKG)', 'Amsterdam (AMS)', 'Frankfurt (FRA)',
        'Mumbai (BOM)', 'Delhi (DEL)', 'Bangkok (BKK)', 'Seoul (ICN)', 'Sydney (SYD)',
        'Toronto (YYZ)', 'Vancouver (YVR)', 'Mexico City (MEX)', 'São Paulo (GRU)', 'Buenos Aires (EZE)',
        'Cairo (CAI)', 'Istanbul (IST)', 'Moscow (SVO)', 'Madrid (MAD)', 'Rome (FCO)',
        'Barcelona (BCN)', 'Milan (MXP)', 'Zurich (ZRH)', 'Vienna (VIE)', 'Stockholm (ARN)',
        'Oslo (OSL)', 'Copenhagen (CPH)', 'Helsinki (HEL)', 'Warsaw (WAW)', 'Prague (PRG)',
        'Budapest (BUD)', 'Athens (ATH)', 'Lisbon (LIS)', 'Porto (OPO)', 'Dublin (DUB)',
        'Brussels (BRU)', 'Luxembourg (LUX)', 'Monaco (MCM)', 'Nice (NCE)', 'Marseille (MRS)',
        'Berlin (TXL)', 'Hamburg (HAM)', 'Munich (MUC)', 'Cologne (CGN)', 'Dusseldorf (DUS)',
        'Geneva (GVA)', 'Montreal (YUL)', 'Calgary (YYC)', 'Edmonton (YEG)', 'Ottawa (YOW)',
        'Melbourne (MEL)', 'Brisbane (BNE)', 'Perth (PER)', 'Adelaide (ADL)', 'Canberra (CBR)',
        'Auckland (AKL)', 'Wellington (WLG)', 'Christchurch (CHC)', 'Queenstown (ZQN)',
        'Johannesburg (JNB)', 'Cape Town (CPT)', 'Durban (DUR)', 'Nairobi (NBO)', 'Lagos (LOS)',
        'Abu Dhabi (AUH)', 'Doha (DOH)', 'Riyadh (RUH)', 'Jeddah (JED)', 'Tel Aviv (TLV)',
        'Beirut (BEY)', 'Amman (AMM)', 'Riyadh (RUH)', 'Kuwait (KWI)', 'Manama (BAH)',
        'Muscat (MCT)', 'Doha (DOH)', 'Abu Dhabi (AUH)', 'Dubai (DXB)', 'Sharjah (SHJ)',
        'Kuala Lumpur (KUL)', 'Jakarta (CGK)', 'Manila (MNL)', 'Ho Chi Minh City (SGN)',
        'Hanoi (HAN)', 'Phnom Penh (PNH)', 'Yangon (RGN)', 'Kathmandu (KTM)', 'Thimphu (PBH)',
        'Colombo (CMB)', 'Male (MLE)', 'Port Louis (MRU)', 'Victoria (SEZ)', 'Antananarivo (TNR)',
        'Dakar (DKR)', 'Abidjan (ABJ)', 'Accra (ACC)', 'Lomé (LFW)', 'Ouagadougou (OUA)',
        'Niamey (NIM)', 'Bamako (BKO)', 'Conakry (CKY)', 'Freetown (FNA)', 'Monrovia (MLW)',
        'Banjul (BJL)', 'Bissau (OXB)', 'Praia (RAI)', 'São Tomé (TMS)', 'Malabo (SSG)',
        'Libreville (LBV)', 'Brazzaville (BZV)', 'Kinshasa (FIH)', 'Lubumbashi (FBM)', 'Kigali (KGL)',
        'Bujumbura (BJM)', 'Dodoma (DOD)', 'Dar es Salaam (DAR)', 'Mogadishu (MGQ)', 'Hargeisa (HGA)',
        'Asmara (ASM)', 'Addis Ababa (ADD)', 'Djibouti (JIB)', 'Sanaa (SAH)', "Sana'a (SAH)",
        'Tripoli (TIP)', 'Tunis (TUN)', 'Algiers (ALG)', 'Rabat (RBA)', 'Casablanca (CMN)',
        'Marrakech (RAK)', 'Fez (FEZ)', 'Tangier (TNG)', 'Agadir (AGA)', 'Essaouira (ESU)',
        'Fes (FEZ)', 'Oujda (OUD)', 'Nador (NDR)', 'Laayoune (EUN)', 'Dakhla (VIL)',
        'Tamanrasset (TMR)', 'Illizi (VVZ)', 'In Guezzam (INZ)', 'Tindouf (TIN)', 'Timimoun (TMX)'
    ];

    const filterSuggestions = (input: string, suggestions: string[]) => {
        if (!input) return [];
        return suggestions.filter(item => 
            item.toLowerCase().includes(input.toLowerCase())
        ).slice(0, 8); // Limit to 8 suggestions
    };

    const handleSearchInputChange = (field: string, value: string) => {
        setSearchData(prev => ({
            ...prev,
            [field]: value
        }));
        
        // Filter suggestions based on input
        if (field === 'from') {
            const filtered = filterSuggestions(value, airportsAndCities);
            setFromSuggestions(filtered);
            setShowFromSuggestions(filtered.length > 0);
        } else if (field === 'to') {
            const filtered = filterSuggestions(value, airportsAndCities);
            setToSuggestions(filtered);
            setShowToSuggestions(filtered.length > 0);
        }
        
        // Hide validation error when user starts typing
        if (showValidationError) {
            setShowValidationError(false);
        }
    };

    const selectSuggestion = (field: 'from' | 'to', suggestion: string) => {
        setSearchData(prev => ({
            ...prev,
            [field]: suggestion
        }));
        setShowFromSuggestions(false);
        setShowToSuggestions(false);
    };

    const handleSearch = () => {
        console.log('Searching for:', {
            tab: activeTab,
            ...searchData
        });
        
        // Navigate to the appropriate page based on active tab
        const routes = {
            flights: '/flights',
            hotels: '/hotels',
            packages: '/packages',
            tours: '/tours'
        };
        
        if (routes[activeTab as keyof typeof routes]) {
            window.location.href = routes[activeTab as keyof typeof routes];
        }
    };

    const handleSearchWithValidation = () => {
        // Check if any required fields are filled (for flights, at least 'from' or 'to')
        const hasSomeData = searchData.from || searchData.to || searchData.depart;
        
        if (hasSomeData) {
            setShowValidationError(false);
            handleSearch();
        } else {
            // Show validation error
            setShowValidationError(true);
            // Hide error after 3 seconds
            setTimeout(() => setShowValidationError(false), 3000);
        }
    };

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-32 md:pt-40 overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                        console.error('Video failed to load:', e);
                    }}
                    onCanPlay={() => {
                        console.log('Video loaded successfully');
                    }}
                >
                    <source src="/bgvideo.mp4" type="video/mp4" />
                </video>
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/70 via-[#0B1C2D]/50 to-[#0B1C2D]/80" />
            </div>

            <div
                ref={contentRef}
                className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center gap-10"
            >
            {/* Enhanced Headlines with animations */}
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1]">
                    <span className="block">Travel</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold animate-gradient">Smarter</span>
                    <span className="block">Go Further</span>
                </h1>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
                >
                    Discover the world with intelligent flight searches, curated tours, and personalized packages designed just for you.
                </motion.p>
            </div>

                {/* Enhanced Search Module */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className={cn(
                        "w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-500",
                        isSearchFocused && "bg-white/10 border-accent-cyan/30 shadow-[0_0_40px_rgba(0,209,255,0.2)]"
                    )}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                >
                    {/* Enhanced Tabs with descriptions */}
                    <div className="flex gap-2 md:gap-6 border-b border-white/10 pb-6 mb-8 overflow-x-auto no-scrollbar">
                        {searchTabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                    "relative flex flex-col items-center gap-1 pb-3 px-3 text-sm md:text-base font-medium transition-colors whitespace-nowrap min-w-[80px]",
                                    activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-200"
                                )}
                            >
                                <motion.div
                                    animate={{
                                        rotate: activeTab === tab.id ? 360 : 0,
                                        scale: activeTab === tab.id ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <tab.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </motion.div>
                                <span className="text-xs md:text-sm">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-accent-cyan box-content shadow-[0_0_15px_rgba(0,209,255,0.8)]"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                    
                    {/* Tab description */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={activeTab}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="text-center text-gray-400 text-sm mb-6"
                        >
                            {searchTabs.find(tab => tab.id === activeTab)?.description}
                        </motion.p>
                    </AnimatePresence>

                    {/* Validation Error Message */}
                    <AnimatePresence>
                        {showValidationError && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
                            >
                                <p className="text-red-400 text-sm text-center">
                                    Please fill out at least one field (From, To, or Departure Date)
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Search Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* From */}
                        <div className="md:col-span-3 space-y-2 group relative">
                            <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1 group-focus-within:text-accent-cyan transition-colors">From</label>
                            <div className="relative">
                                <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="City or Airport"
                                    value={searchData.from}
                                    onChange={(e) => handleSearchInputChange('from', e.target.value)}
                                    onFocus={() => setShowFromSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all font-medium"
                                />
                                
                                {/* Suggestions Dropdown */}
                                {showFromSuggestions && fromSuggestions.length > 0 && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-primary/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl max-h-60 overflow-y-auto z-50">
                                        {fromSuggestions.map((suggestion, index) => (
                                            <motion.button
                                                key={index}
                                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,209,255,0.1)' }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => selectSuggestion('from', suggestion)}
                                                className="w-full text-left px-4 py-3 text-white hover:bg-accent-cyan/10 transition-colors flex items-center gap-3"
                                            >
                                                <MapPinIcon className="w-4 h-4 text-accent-cyan" />
                                                <span className="text-sm">{suggestion}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* To */}
                        <div className="md:col-span-3 space-y-2 group relative">
                            <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1 group-focus-within:text-accent-cyan transition-colors">To</label>
                            <div className="relative">
                                <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Dream Destination"
                                    value={searchData.to}
                                    onChange={(e) => handleSearchInputChange('to', e.target.value)}
                                    onFocus={() => setShowToSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all font-medium"
                                />
                                
                                {/* Suggestions Dropdown */}
                                {showToSuggestions && toSuggestions.length > 0 && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-primary/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl max-h-60 overflow-y-auto z-50">
                                        {toSuggestions.map((suggestion, index) => (
                                            <motion.button
                                                key={index}
                                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,209,255,0.1)' }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => selectSuggestion('to', suggestion)}
                                                className="w-full text-left px-4 py-3 text-white hover:bg-accent-cyan/10 transition-colors flex items-center gap-3"
                                            >
                                                <MapPinIcon className="w-4 h-4 text-accent-cyan" />
                                                <span className="text-sm">{suggestion}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Dates (Depart/Return) */}
                        <div className="md:col-span-3 grid grid-cols-2 gap-2">
                            <div className="space-y-2 group">
                                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1 group-focus-within:text-accent-cyan transition-colors">Depart</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Add Date"
                                        value={searchData.depart}
                                        onChange={(e) => handleSearchInputChange('depart', e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-10 pr-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all text-sm font-medium"
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => e.target.type = 'text'}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1 group-focus-within:text-accent-cyan transition-colors">Return</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Add Date"
                                        value={searchData.return}
                                        onChange={(e) => handleSearchInputChange('return', e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-10 pr-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all text-sm font-medium"
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => e.target.type = 'text'}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Travelers & Class */}
                        <div className="md:col-span-3 grid grid-cols-2 gap-2">
                            <div className="space-y-2 group">
                                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1 group-focus-within:text-accent-cyan transition-colors">Travelers</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <select 
                                        value={searchData.travelers}
                                        onChange={(e) => handleSearchInputChange('travelers', e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-9 pr-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all text-sm appearance-none font-medium cursor-pointer [&>option]:bg-background"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1 group-focus-within:text-accent-cyan transition-colors">Class</label>
                                <div className="relative">
                                    <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <select 
                                        value={searchData.class}
                                        onChange={(e) => handleSearchInputChange('class', e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-9 pr-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all text-sm appearance-none font-medium cursor-pointer [&>option]:bg-background"
                                    >
                                        <option>Economy</option>
                                        <option>Business</option>
                                        <option>First</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Search Button & Trust Badges */}
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 md:gap-6 text-sm text-gray-400 order-2 md:order-1 flex-wrap justify-center">
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 cursor-default"
                            >
                                <Check className="w-4 h-4 text-accent-cyan" /> 
                                <span className="hidden md:inline">No Hidden Fees</span>
                                <span className="md:hidden">No Fees</span>
                            </motion.span>
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 cursor-default"
                            >
                                <Check className="w-4 h-4 text-accent-cyan" /> 
                                <span className="hidden md:inline">24/7 Support</span>
                                <span className="md:hidden">24/7</span>
                            </motion.span>
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 cursor-default"
                            >
                                <Check className="w-4 h-4 text-accent-cyan" /> 
                                <span className="hidden md:inline">Flexible Booking</span>
                                <span className="md:hidden">Flexible</span>
                            </motion.span>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,209,255,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSearchWithValidation}
                            className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-primary hover:from-white hover:to-white hover:text-primary active:scale-95 transition-all duration-300 font-bold text-lg rounded-full flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(0,209,255,0.4)] order-1 md:order-2 relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <Search className="w-5 h-5" />
                                Search Flights
                                <ArrowRight className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </div>
                </motion.div>
                
                {/* Stats Section */}
                <motion.div 
                    ref={statsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-4xl"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="text-center"
                        >
                            <div className="text-2xl md:text-3xl font-black text-accent-cyan mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


// Custom MapPin Icon for internal use to avoid conflicts if needed, or just use Lucide's MapPin
function MapPinIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    );
}
