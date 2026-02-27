const Comparison = () => {
    const comparisons = [
        {
            old: "Expensive GPS boxes and wiring fees for every single bus.",
            new: "Zero installations. Instantly tracks via the driver's smartphone."
        },
        {
            old: "Constant hassle with broken antennas and SIM card recharges.",
            new: "100% cloud-based. No SIMs to manage or hardware to repair."
        },
        {
            old: "If a bus breaks down, tracking is stuck inside the broken vehicle.",
            new: "Need to swap a bus? Just move the driver's phone. Tracking continues."
        },
        {
            old: "Schools flooded with morning phone calls from anxious parents.",
            new: "Automated WhatsApp alerts and live maps give parents peace of mind."
        },
    ];

    return (
        <section
            className="w-full min-h-[100dvh] flex flex-col justify-center py-24 bg-[#000000] border-t border-neutral-900"
        >
            <div className="max-w-5xl mx-auto px-6 w-full">

                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-[44px] font-bold text-white tracking-tight font-montserrat leading-[1.15] mb-4">
                        Ditch the Hardware. <br className="hidden sm:block" />
                        <span className="text-[#F4C430]">Shift to Software.</span>
                    </h2>
                    <p className="text-neutral-400 text-base md:text-lg font-inter max-w-2xl mx-auto">
                        Why modern schools are leaving clunky legacy systems behind for agile SaaS solutions.
                    </p>
                </div>

                {/* Comparison Container */}
                <div className="bg-[#0a0a0a] border border-neutral-800/60 rounded-3xl p-4 md:p-8 shadow-2xl relative overflow-hidden">

                    {/* Background subtle glow behind the "New Way" side */}
                    <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F4C430]/5 to-transparent pointer-events-none"></div>

                    {/* Table Column Headers (Desktop Only) */}
                    <div className="hidden md:grid grid-cols-2 gap-8 mb-6 px-4">
                        <div className="text-neutral-500 font-montserrat tracking-widest uppercase text-xs font-bold flex items-center gap-2">
                            Legacy Hardware
                        </div>
                        <div className="text-[#F4C430] font-montserrat tracking-widest uppercase text-xs font-bold flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] animate-pulse"></div>
                            PixaTrack SaaS
                        </div>
                    </div>

                    {/* Comparison Rows */}
                    <div className="space-y-4 relative z-10">
                        {comparisons.map((item, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 bg-[#111111] border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors duration-300"
                            >
                                {/* The Old Way (Pain) */}
                                <div className="p-6 md:p-8 flex items-start gap-4 border-b md:border-b-0 md:border-r border-neutral-800/50 bg-neutral-900/20">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/20">
                                        <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-neutral-500 font-inter text-sm md:text-base leading-relaxed">
                                        {item.old}
                                    </p>
                                </div>

                                {/* The New Way (Relief) */}
                                <div className="p-6 md:p-8 flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#F4C430]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/20">
                                        <svg className="w-3.5 h-3.5 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-white font-inter text-sm md:text-base font-medium leading-relaxed shadow-sm">
                                        {item.new}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Comparison;