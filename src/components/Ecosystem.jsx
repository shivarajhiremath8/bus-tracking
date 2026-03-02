import { motion } from 'framer-motion';

const roles = [
    {
        id: "driver",
        title: "Bus Drivers",
        subtitle: "The Tracking Engine",
        desc: "A frictionless, zero-install web app. One tap starts the trip and broadcasts high-fidelity GPS data.",
        tags: ["1-Tap GPS", "Zero Installs", "Battery Optimized"]
    },
    {
        id: "admin",
        title: "School Admins",
        subtitle: "Command Center",
        desc: "Live fleet map and instant drag-and-drop rosters from a centralized dashboard.",
        tags: ["Live Map", "Centralized"]
    },
    {
        id: "parent",
        title: "Parents",
        subtitle: "Peace of Mind",
        desc: "Secure, passwordless access to live tracking and accurate arrival ETAs via mobile.",
        tags: ["Secure Access", "Live ETAs"]
    }
];

const DomainGraphic = ({ id }) => {
    switch (id) {
        case "driver":
            return (
                <div className="absolute bottom-0 right-0 w-full h-full opacity-[0.25] pointer-events-none text-[#F4C430] overflow-hidden flex items-end justify-end pr-4 pb-4">
                    <motion.svg width="150" height="150" viewBox="0 0 100 100">
                        <path d="M 20 85 Q 50 80 80 85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
                        <motion.ellipse cx="50" cy="85" rx="25" ry="8" fill="none" stroke="currentColor" strokeWidth="1"
                            style={{ willChange: 'transform' }}
                            animate={{ scale: [0.3, 1.2], opacity: [0.8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.ellipse cx="50" cy="85" rx="25" ry="8" fill="none" stroke="currentColor" strokeWidth="1"
                            style={{ willChange: 'transform' }}
                            animate={{ scale: [0.3, 1.2], opacity: [0.8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                        />
                        <motion.g
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <path d="M 50 25 C 38 25 30 35 30 48 C 30 65 50 85 50 85 C 50 85 70 65 70 48 C 70 35 62 25 50 25 Z"
                                fill="none" stroke="currentColor" strokeWidth="1.5"
                            />
                            <circle cx="50" cy="46" r="6" fill="currentColor" />
                        </motion.g>
                    </motion.svg>
                </div>
            );

        case "admin":
            return (
                <div className="absolute bottom-0 right-0 w-full h-full opacity-[0.2] pointer-events-none text-[#F4C430] overflow-hidden flex items-end justify-end pr-4 pb-4">
                    <motion.svg width="150" height="150" viewBox="0 0 100 100">
                        <rect x="20" y="20" width="70" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="20" y1="28" x2="90" y2="28" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="40" y1="28" x2="40" y2="80" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="23" y="35" width="14" height="2" fill="currentColor" opacity="0.5" />
                        <rect x="23" y="42" width="10" height="2" fill="currentColor" opacity="0.5" />
                        <rect x="23" y="49" width="12" height="2" fill="currentColor" opacity="0.5" />
                        <path d="M 45 60 L 65 40 L 85 50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
                        <path d="M 50 70 L 70 70 L 80 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
                        <motion.circle r="1.5" fill="currentColor"
                            cx={45} cy={60}
                            animate={{ cx: [45, 65, 85], cy: [60, 40, 50] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle r="1.5" fill="currentColor"
                            cx={50} cy={70}
                            animate={{ cx: [50, 70, 80], cy: [70, 70, 40] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
                        />
                    </motion.svg>
                </div>
            );

        case "parent":
            return (
                <div className="absolute bottom-0 right-0 w-full h-full opacity-[0.25] pointer-events-none text-[#F4C430] overflow-hidden flex items-end justify-end pr-4 pb-4">
                    <motion.svg width="130" height="130" viewBox="0 0 100 100">
                        <rect x="60" y="20" width="30" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="1" />
                        <line x1="70" y1="24" x2="80" y2="24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                        <line x1="75" y1="35" x2="75" y2="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                        <motion.circle cx={75} cy={35} r="2.5" fill="currentColor"
                            animate={{ cy: [35, 70] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
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
                bg-[#0a0a0a] p-8 
                transition-all duration-500 hover:-translate-y-1 hover:border-[#F4C430]/40 
                hover:shadow-[0_8px_30px_rgba(244,196,48,0.05)]
                flex flex-col justify-between h-full min-h-[300px]
            `}
        >
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500"
                style={{
                    backgroundImage: 'radial-gradient(#F4C430 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                }}
            />

            <DomainGraphic id={role.id} />

            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#F4C430]/50" />
            </div>
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#F4C430]/50" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-start gap-4">
                <div>
                    {/* Cleaned up subtitle: removed the bullet point and uppercase tracking */}
                    <p className="text-sm font-semibold text-[#F4C430] font-montserrat mb-2">
                        {role.subtitle}
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 font-montserrat">
                        {role.title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed font-inter pr-4 mb-6">
                        {role.desc}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {role.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-400 bg-neutral-900 rounded border border-neutral-800 group-hover:border-[#F4C430]/30 group-hover:text-[#F4C430] transition-all duration-300"
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

                <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-[44px] font-bold text-white tracking-tight font-montserrat leading-[1.15]"
                    >
                        One Unified <span className="text-[#F4C430]">Ecosystem.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-neutral-400 max-w-lg text-sm md:text-base font-inter mx-auto"
                    >
                        Three tailored experiences, synced in real-time. Designed specifically for the chaos of school transport.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {roles.map((role, index) => (
                        <EcosystemCard key={index} role={role} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Ecosystem;