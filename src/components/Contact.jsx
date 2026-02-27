const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#000000] border-t border-neutral-900">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-[44px] font-bold text-white tracking-tight font-montserrat leading-[1.15]">
                        Let's Talk <span className="text-[#F4C430]">Integration.</span>
                    </h2>
                    <p className="mt-4 text-neutral-400 text-base md:text-lg font-inter max-w-xl mx-auto">
                        Leave your details below and our technical team will reach out to discuss your school's specific requirements.
                    </p>
                </div>

                {/* Animated Stroke Wrapper - Increased padding to p-[2px] for a thicker border */}
                <div className="relative rounded-[32px] p-[2px] overflow-hidden shadow-2xl">

                    {/* Continuous Rotating Glow - Visible on all devices */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_60%,rgba(244,196,48,0.25)_100%)] animate-[spin_8s_linear_infinite] opacity-100"></div>

                    {/* Inner Form Mask */}
                    <form className="relative bg-[#0a0a0a] p-8 md:p-12 rounded-[30px] space-y-6 z-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 placeholder:text-neutral-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">Email</label>
                                <input
                                    type="email"
                                    placeholder="admin@school.edu"
                                    className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 placeholder:text-neutral-600"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">Phone</label>
                                <input
                                    type="text"
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 placeholder:text-neutral-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">School / Institution</label>
                                <input
                                    type="text"
                                    placeholder="Global Academy"
                                    className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 placeholder:text-neutral-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Tell us about your current transport setup..."
                                className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 resize-none placeholder:text-neutral-600"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold font-montserrat text-base md:text-lg py-4 rounded-xl hover:bg-[#F4C430] transition-colors duration-300 mt-4 shadow-lg active:scale-[0.98]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;