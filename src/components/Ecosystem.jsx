import { motion } from 'framer-motion';

const roles = [
    {
        id: "driver",
        title: "Bus Drivers",
        subtitle: "The Tracking Engine",
        desc: "A frictionless, zero-install web app. One tap starts the trip and broadcasts high-fidelity GPS data. No complex training required.",
        colSpan: "lg:col-span-7 lg:row-span-2",
        tags: ["1-Tap GPS", "Zero Installs", "Battery Optimized"]
    },
    {
        id: "admin",
        title: "School Admins",
        subtitle: "Command Center",
        desc: "Live fleet map and instant drag-and-drop rosters from a centralized dashboard.",
        colSpan: "lg:col-span-5",
        tags: ["Live Map", "Centralized"]
    },
    {
        id: "parent",
        title: "Parents",
        subtitle: "Peace of Mind",
        desc: "Secure, passwordless access to live tracking and accurate arrival ETAs via mobile.",
        colSpan: "lg:col-span-5",
        tags: ["Secure Access", "Live ETAs"]
    }
];

// Highly Relatable, SaaS-Specific Animations
// Highly Relatable, SaaS-Specific Animations
const DomainGraphic = ({ id }) => {
    switch (id) {
        case "driver":
            return (
                // THEME: Universal GPS Location Broadcasting
                <div className="absolute right-0 bottom-0 w-full h-full opacity-[0.25] pointer-events-none text-[#F4C430] flex items-center justify-end pr-12 pb-4">
                    <motion.svg width="140" height="140" viewBox="0 0 100 100">
                        {/* Subtle Ground/Road Line */}
                        <path d="M 20 85 Q 50 80 80 85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />

                        {/* Emitting GPS Ripples on the ground */}
                        <motion.ellipse cx="50" cy="85" rx="25" ry="8" fill="none" stroke="currentColor" strokeWidth="1"
                            animate={{ scale: [0.3, 1.2], opacity: [0.8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.ellipse cx="50" cy="85" rx="25" ry="8" fill="none" stroke="currentColor" strokeWidth="1"
                            animate={{ scale: [0.3, 1.2], opacity: [0.8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                        />

                        {/* The Large Hovering GPS Pin */}
                        <motion.g
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Pin Shape */}
                            <path d="M 50 25 C 38 25 30 35 30 48 C 30 65 50 85 50 85 C 50 85 70 65 70 48 C 70 35 62 25 50 25 Z" 
                                fill="none" stroke="currentColor" strokeWidth="1.5" 
                            />
                            {/* Inner Dot */}
                            <circle cx="50" cy="46" r="6" fill="currentColor" />
                        </motion.g>
                    </motion.svg>
                </div>
            );

        case "admin":
            return (
                // THEME: Centralized Dashboard (Admin Screen)
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.2] pointer-events-none text-[#F4C430] overflow-hidden flex items-end justify-end">
                    <motion.svg width="180" height="180" viewBox="0 0 100 100">
                        {/* Dashboard UI Frame */}
                        <rect x="20" y="20" width="70" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        {/* Top Navbar */}
                        <line x1="20" y1="28" x2="90" y2="28" stroke="currentColor" strokeWidth="0.5" />
                        {/* Left Sidebar (Rosters) */}
                        <line x1="40" y1="28" x2="40" y2="80" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="23" y="35" width="14" height="2" fill="currentColor" opacity="0.5" />
                        <rect x="23" y="42" width="10" height="2" fill="currentColor" opacity="0.5" />
                        <rect x="23" y="49" width="12" height="2" fill="currentColor" opacity="0.5" />
                        
                        {/* Map Area / Live Fleet Tracking */}
                        <path d="M 45 60 L 65 40 L 85 50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
                        <path d="M 50 70 L 70 70 L 80 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
                        
                        {/* Moving Buses on the Dashboard */}
                        <motion.circle r="1.5" fill="currentColor" 
                            animate={{ cx: [45, 65, 85], cy: [60, 40, 50] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }} 
                        />
                        <motion.circle r="1.5" fill="currentColor" 
                            animate={{ cx: [50, 70, 80], cy: [70, 70, 40] }} 
                            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }} 
                        />
                    </motion.svg>
                </div>
            );

        case "parent":
            return (
                // THEME: Mobile Live Tracking (Parent View)
                <div className="absolute right-0 bottom-0 w-full h-full opacity-[0.25] pointer-events-none text-[#F4C430] overflow-hidden flex items-center justify-end pr-5">
                    <motion.svg width="100" height="100" viewBox="0 0 100 100">
                        {/* Mobile Phone Frame */}
                        <rect x="60" y="20" width="30" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="1" />
                        {/* Phone Notch/Speaker */}
                        <line x1="70" y1="24" x2="80" y2="24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                        
                        {/* Route Line on Screen */}
                        <line x1="75" y1="35" x2="75" y2="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                        
                        {/* The Bus Moving down the route towards the stop */}
                        <motion.circle cx="75" r="2.5" fill="currentColor" 
                            animate={{ cy: [35, 70] }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                        />
                        
                        {/* The Bus Stop / Destination */}
                        <circle cx="75" cy="70" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="75" cy="70" r="1" fill="currentColor" />
                    </motion.svg>
                </div>
            );

        default:
            return null;
    }
};

const EcosystemCard = ({ role, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
            className={`
                group relative overflow-hidden rounded-3xl border border-neutral-800/60 
                bg-[#0a0a0a] p-8 md:p-10 
                transition-all duration-500 hover:-translate-y-1 hover:border-[#F4C430]/40 
                hover:shadow-[0_8px_30px_rgba(244,196,48,0.05)]
                ${role.colSpan} flex flex-col justify-between min-h-[250px]
            `}
        >
            {/* Structural Layer: Subtle Dot Grid Overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500"
                style={{
                    backgroundImage: 'radial-gradient(#F4C430 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                }}
            />

            {/* Relatable Motion Graphics Layer */}
            <DomainGraphic id={role.id} />

            {/* Interaction Layer: Tech Corner Brackets */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#F4C430]/50" />
            </div>
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#F4C430]/50" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-1.5 bg-[#F4C430] rounded-full group-hover:animate-ping opacity-80" />
                        <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase font-montserrat group-hover:text-neutral-400 transition-colors">
                            {role.subtitle}
                        </p>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 font-montserrat">
                        {role.title}
                    </h3>

                    <p className={`text-neutral-400 leading-relaxed font-inter ${role.id === 'driver' ? 'text-lg max-w-md' : 'text-base pr-8'}`}>
                        {role.desc}
                    </p>
                </div>

                {/* Tag Footer */}
                <div className="flex flex-wrap gap-2 pt-4">
                    {role.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-[10px] md:text-xs font-mono font-medium uppercase tracking-wider text-neutral-400 bg-neutral-900 rounded border border-neutral-800 group-hover:border-[#F4C430]/30 group-hover:text-[#F4C430] transition-all duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Ecosystem = () => {
    return (
        <section
            id="ecosystem"
            className="relative w-full min-h-[100dvh] flex flex-col justify-center py-24 bg-[#000000] border-t border-neutral-900 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

                {/* Header */}
                <div className="flex flex-col mb-16 md:mb-20 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[44px] font-bold text-white tracking-tight font-montserrat leading-[1.15]"
                    >
                        One Unified <span className="text-[#F4C430]">Ecosystem.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-neutral-400 max-w-lg text-base md:text-lg font-inter mx-auto md:mx-0"
                    >
                        Three tailored experiences, synced in real-time. Designed specifically for the chaos of school transport.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
                    {roles.map((role, index) => (
                        <EcosystemCard key={index} role={role} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Ecosystem;