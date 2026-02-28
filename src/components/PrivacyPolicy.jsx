import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#000000] text-neutral-300 font-inter flex flex-col">
            {/* Simple Header */}
            <header className="border-b border-neutral-900 py-6 px-6">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold tracking-tight text-white font-montserrat">
                        Pixa<span className="text-[#F4C430]">Track</span>.
                    </Link>
                    <Link to="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-8">Privacy Policy</h1>
                <p className="mb-8 text-neutral-500 text-sm">Last Updated: March 2026</p>

                <div className="space-y-8 text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white font-montserrat mb-4">1. Information We Collect</h2>
                        <p className="mb-3">To provide our real-time tracking services, PixaTrack collects the following data:</p>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                            <li><strong>Driver Location Data:</strong> Real-time GPS coordinates from the driver's smartphone during active trips.</li>
                            <li><strong>Contact Information:</strong> Parent phone numbers and email addresses provided by the school for WhatsApp/SMS notifications.</li>
                            <li><strong>Usage Data:</strong> Application performance and diagnostic data to improve our system.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white font-montserrat mb-4">2. How We Use Your Information</h2>
                        <p className="mb-3">We use the collected information exclusively to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                            <li>Provide real-time bus locations to authorized parents and school administrators.</li>
                            <li>Send automated WhatsApp and SMS alerts regarding bus proximity and delays.</li>
                            <li>Maintain and improve the stability of our zero-hardware tracking ecosystem.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white font-montserrat mb-4">3. Data Security & Sharing</h2>
                        <p className="text-neutral-400">
                            We implement strict security measures to protect your data. We do not sell, rent, or trade personal information to third parties. GPS data is only accessible to the specific school administrators and verified parents linked to that route. Tracking is strictly limited to the duration of the active trip.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white font-montserrat mb-4">4. Contact Us</h2>
                        <p className="text-neutral-400">
                            If you have questions about this Privacy Policy, please contact us at privacy@pixatrack.com.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;