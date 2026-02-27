import { motion } from 'framer-motion';

const Benefits = () => {
    return (
        <section
            id="benefits"
            className="w-full min-h-[100dvh] flex flex-col justify-center py-24 bg-[#050505] border-t border-neutral-900 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left Side: The Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-[44px] font-bold mb-12 leading-[1.15] tracking-tight font-montserrat text-white">
                            Engineered to save <br className="hidden sm:block" />
                            <span className="text-[#F4C430]">Time & Money.</span>
                        </h2>

                        <div className="space-y-8 font-inter">
                            <div className="flex items-start gap-5">
                                <div className="w-8 h-8 rounded-full bg-[#F4C430]/10 border border-[#F4C430]/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white font-montserrat tracking-tight mb-2">Zero Hardware Costs</h4>
                                    <p className="text-neutral-400 text-base leading-relaxed max-w-sm">
                                        Utilize the smartphones your drivers already own. No installation downtime or repairs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-8 h-8 rounded-full bg-[#F4C430]/10 border border-[#F4C430]/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white font-montserrat tracking-tight mb-2">Stop Endless Calls</h4>
                                    <p className="text-neutral-400 text-base leading-relaxed max-w-sm">
                                        Empower parents to check the app securely instead of calling the school reception.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: The Data Proof */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="bg-[#0a0a0a] border border-neutral-800/60 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-[#F4C430]/30 transition-colors duration-500"
                    >
                        {/* Subtle grid background */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                        <h3 className="text-xs font-bold mb-10 text-neutral-500 uppercase tracking-widest font-montserrat relative z-10 text-center sm:text-left">
                            Operational Efficiency
                        </h3>

                        <div className="space-y-8 font-inter relative z-10">
                            {/* Stat 1 */}
                            <div className="border-b border-neutral-800/80 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 text-center sm:text-left">
                                <div>
                                    <p className="text-neutral-400 text-sm font-medium mb-1">Onboarding Time</p>
                                    <p className="text-neutral-600 text-xs">Via bulk CSV upload</p>
                                </div>
                                <span className="text-4xl md:text-5xl font-bold text-white font-montserrat tracking-tight leading-none mt-2 sm:mt-0">
                                    Minutes
                                </span>
                            </div>

                            {/* Stat 2 */}
                            <div className="border-b border-neutral-800/80 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 text-center sm:text-left">
                                <div>
                                    <p className="text-neutral-400 text-sm font-medium mb-1">Hardware Installation</p>
                                    <p className="text-neutral-600 text-xs">No mechanical wiring</p>
                                </div>
                                <span className="text-4xl md:text-5xl font-bold text-[#F4C430] font-montserrat tracking-tight leading-none mt-2 sm:mt-0 group-hover:drop-shadow-[0_0_15px_rgba(244,196,48,0.3)] transition-all duration-300">
                                    Zero
                                </span>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 pt-2 text-center sm:text-left">
                                <div>
                                    <p className="text-neutral-400 text-sm font-medium mb-1">Parent Password Resets</p>
                                    <p className="text-neutral-600 text-xs">Proprietary secure No-OTP login</p>
                                </div>
                                <span className="text-4xl md:text-5xl font-bold text-white font-montserrat tracking-tight leading-none mt-2 sm:mt-0">
                                    0
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;