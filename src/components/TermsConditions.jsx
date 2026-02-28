import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const TermsConditions = () => {
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
                <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-8">Terms & Conditions</h1>
                <p className="mb-8 text-neutral-500 text-sm">Last Updated: March 2026</p>

                <div className="space-y-8 text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white font-montserrat mb-4">1. Acceptance of Terms</h2>
                        <p className="text-neutral-400">
                            By accessing or using the PixaTrack platform, provided by Pixelamedia, schools, drivers, and parents agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white font-montserrat mb-4">2. Service Description</h2>
                        <p className="text-neutral-400">
                            PixaTrack is a SaaS (Software as a Service) platform designed to provide real-time location tracking for school transport using driver smartphones. We provide the software infrastructure, dashboard, and notification routing. We do not provide physical GPS hardware or telecommunication data plans.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white font-montserrat mb-4">3. School & User Responsibilities</h2>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                            <li><strong>Consent:</strong> Schools are responsible for obtaining necessary consent from parents and drivers before implementing tracking and automated notifications.</li>
                            <li><strong>Device Requirements:</strong> Drivers must have a functioning smartphone with an active data connection and location services enabled during trips.</li>
                            <li><strong>Accuracy of Data:</strong> Schools are responsible for maintaining accurate student rosters and parent contact numbers within the PixaTrack dashboard.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white font-montserrat mb-4">4. Limitation of Liability</h2>
                        <p className="text-neutral-400">
                            PixaTrack strives for 99.9% uptime; however, tracking accuracy is dependent on third-party factors including network coverage, device battery, and GPS signal strength. Pixelamedia shall not be liable for any indirect, incidental, or consequential damages arising from service interruptions or delayed notifications.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsConditions;