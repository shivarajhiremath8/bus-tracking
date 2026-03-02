import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NotificationPopup = ({ status, onClose }) => {
    if (status === "idle" || status === "loading") return null;

    const isSuccess = status === "success";

    // Smooth AI-style green: Emerald 400/500
    // Soft error red: Rose 400/500
    const theme = isSuccess
        ? {
            bg: "bg-emerald-950/20",
            border: "border-emerald-500/30",
            iconBg: "bg-emerald-500/20",
            iconColor: "text-emerald-400",
            textColor: "text-emerald-50",
            subText: "text-emerald-200/60"
        }
        : {
            bg: "bg-rose-950/20",
            border: "border-rose-500/30",
            iconBg: "bg-rose-500/20",
            iconColor: "text-rose-400",
            textColor: "text-rose-50",
            subText: "text-rose-200/60"
        };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className={`fixed bottom-8 right-8 z-[100] flex items-center gap-4 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border ${theme.bg} ${theme.border} backdrop-blur-2xl min-w-[320px]`}
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${theme.iconBg} ${theme.iconColor}`}>
                {isSuccess ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>

            <div className="flex-1">
                <p className={`font-semibold font-montserrat text-sm tracking-wide ${theme.textColor}`}>
                    {isSuccess ? "Message Received" : "System Note"}
                </p>
                <p className={`text-xs font-inter mt-0.5 ${theme.subText}`}>
                    {isSuccess ? "Our team will contact you shortly." : "Something went wrong. Please retry."}
                </p>
            </div>

            <button
                onClick={onClose}
                className="p-1.5 hover:bg-white/5 rounded-lg transition-colors self-start"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </motion.div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone) {
            alert("Name and Phone Number are mandatory.");
            return;
        }

        setStatus("loading");

        try {
            const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbziBss7w5ga6cLPfcH-n-SXWw_om7zv6FOpVvbcssX79EypqXSRNGqepz11py_vrs3-yA/exec";

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", school: "", message: "" });

            setTimeout(() => setStatus("idle"), 6000);
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 6000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#000000] border-t border-neutral-900 relative">
            <AnimatePresence>
                <NotificationPopup status={status} onClose={() => setStatus("idle")} />
            </AnimatePresence>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-[44px] font-bold text-white tracking-tight font-montserrat leading-[1.15]">
                        Let's Talk <span className="text-[#F4C430]">Integration.</span>
                    </h2>
                    <p className="mt-4 text-neutral-400 text-base md:text-lg font-inter max-w-xl mx-auto">
                        Leave your details below and our technical team will reach out to discuss your school's specific requirements.
                    </p>
                </div>

                {/* Animated Stroke Wrapper */}
                <div className="relative rounded-[32px] p-[2px] overflow-hidden shadow-2xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_60%,rgba(244,196,48,0.25)_100%)] animate-[spin_8s_linear_infinite] opacity-100"></div>

                    <form onSubmit={handleSubmit} className="relative bg-[#0a0a0a] p-8 md:p-12 rounded-[30px] space-y-6 z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">Name *</label>
                                <input id="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 placeholder:text-neutral-600" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">Email</label>
                                <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="admin@school.edu" className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 placeholder:text-neutral-600" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">Phone *</label>
                                <input id="phone" type="text" required value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 placeholder:text-neutral-600" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">School / Institution</label>
                                <input id="school" type="text" value={formData.school} onChange={handleChange} placeholder="Global Academy" className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 placeholder:text-neutral-600" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-montserrat">Message</label>
                            <textarea id="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us about your current transport setup..." className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-5 py-4 text-white font-inter text-sm focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]/30 transition-all duration-300 resize-none placeholder:text-neutral-600"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className={`w-full font-bold font-montserrat text-base md:text-lg py-4 rounded-xl transition-all duration-300 mt-4 shadow-lg active:scale-[0.98] ${status === "loading" ? "bg-neutral-800 text-neutral-500 cursor-not-allowed" : "bg-white text-black hover:bg-[#F4C430]"
                                }`}
                        >
                            {status === "loading" ? "Sending Details..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;