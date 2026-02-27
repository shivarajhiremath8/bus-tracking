import { useEffect, useState } from 'react';

const ProblemStatement = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const problems = [
        "Parents lack real-time visibility of their child's transit.",
        "Manual coordination causes chaos and delays.",
        "Legacy GPS hardware is expensive to install and maintain.",
        "Inability to instantly verify driver and vehicle status."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % problems.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [problems.length]);

    return (
        <section className="min-h-dvh flex flex-col justify-center py-20 bg-[#050505] border-t border-neutral-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full"> 
                {/* Fixed the grid: used lg:gap-16 and xl:gap-24 to prevent overflow at 1040px */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

                    {/* Left Column: The Problem */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl md:text-[44px] font-bold text-white mb-6 leading-[1.15] tracking-tight font-montserrat">
                            School transport is broken. <br className="hidden sm:block" />
                            <span className="text-[#F4C430]">We fixed it.</span>
                        </h2>

                        <p className="text-neutral-400 text-lg mb-10 leading-relaxed font-inter max-w-md">
                            Endless phone calls, anxious waiting, and blind spots. The old way of managing school buses simply doesn't work anymore.
                        </p>

                        <div className="space-y-5 font-inter">
                            {problems.map((p, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <div
                                        key={i}
                                        className="flex items-start gap-4 cursor-pointer group"
                                        onClick={() => setActiveIndex(i)}
                                    >
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 
                                                ${isActive ? 'bg-[#F4C430] scale-150 shadow-[0_0_8px_rgba(244,196,48,0.8)]' : 'bg-neutral-700 group-hover:bg-neutral-500'}`}
                                            ></div>
                                        </div>
                                        <p className={`text-base md:text-lg transition-colors duration-500 
                                            ${isActive ? 'text-white font-medium' : 'text-neutral-500 group-hover:text-neutral-300'}`}
                                        >
                                            {p}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Animated Card */}
                    <div className="lg:col-span-5 relative rounded-3xl p-[1px] overflow-hidden shadow-2xl w-full max-w-[480px] lg:max-w-none mx-auto">
                        {/* Spinning Gradient */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_75%,rgba(244,196,48,0.3)_100%)] animate-[spin_8s_linear_infinite]"></div>

                        {/* Inner Card content */}
                        <div className="relative bg-[#0a0a0a] rounded-[23px] p-8 md:p-12 h-full w-full border border-neutral-800/50">
                            <h3 className="text-xs font-bold mb-10 text-neutral-500 uppercase tracking-widest font-montserrat text-center">
                                The PixaTrack Advantage
                            </h3>

                            <div className="space-y-10 font-inter">
                                {/* Main Stat */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-1 font-montserrat mb-2">
                                        <span className="text-6xl md:text-7xl font-extrabold text-white leading-none tracking-tighter">90</span>
                                        <span className="text-3xl font-bold text-[#F4C430] leading-none mb-2">%</span>
                                    </div>
                                    <p className="text-neutral-400 text-sm font-medium">Reduction in Parent Calls</p>
                                </div>

                                {/* Split Stats: Fixed the center line logic */}
                                <div className="relative grid grid-cols-2 gap-4 pt-8 border-t border-neutral-800/80">
                                    {/* Centered Vertical Line */}
                                    <div className="absolute top-8 bottom-0 left-1/2 w-px bg-neutral-800/80 transform -translate-x-1/2 h-[calc(100%-32px)] my-auto"></div>
                                    
                                    <div className="text-center px-2">
                                        <span className="block text-3xl md:text-4xl font-bold text-white leading-none tracking-tight font-montserrat mb-2">Zero</span>
                                        <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-wider">Hardware</p>
                                    </div>

                                    <div className="text-center px-2">
                                        <span className="block text-3xl md:text-4xl font-bold text-white leading-none tracking-tight font-montserrat mb-2">Instant</span>
                                        <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-wider">Deployment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;