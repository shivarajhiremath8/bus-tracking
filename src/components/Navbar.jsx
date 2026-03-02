import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide/show navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
                setIsMobileMenuOpen(false);
            } else {
                setIsVisible(true);
            }

            // Smooth transition trigger
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out font-montserrat 
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-neutral-900' : 'bg-transparent'} py-4`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Minimal Logo */}
                <a href="#home" className="text-2xl font-bold tracking-tight text-white flex items-center z-50">
                    Pixa<span className="text-[#F4C430]">Track</span>.
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-neutral-400">
                    <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
                    <a href="#ecosystem" className="hover:text-white transition-colors duration-200">Eco System</a>
                    <a href="#contact" className="hover:text-white transition-colors duration-200">Contact Us</a>
                </nav>

                {/* Desktop CTA */}
                <a
                    href="#howitworks"
                    className="hidden md:inline-block border border-neutral-700 text-white hover:border-[#F4C430] hover:text-[#F4C430] px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                >
                    Watch Demo
                </a>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-white z-50 p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Full-Screen Menu */}
            <div
                className={`fixed inset-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden z-40
                ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
            >
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} aria-label="Navigate to home section" className="text-3xl font-bold text-white hover:text-[#F4C430] transition-colors">Home</a>
                <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)} aria-label="Navigate to ecosystem section" className="text-3xl font-bold text-white hover:text-[#F4C430] transition-colors">Eco System</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} aria-label="Navigate to contact section" className="text-3xl font-bold text-white hover:text-[#F4C430] transition-colors">Contact Us</a>
                <a href="#howitworks" onClick={() => setIsMobileMenuOpen(false)} aria-label="Watch the demo video" className="mt-8 bg-[#F4C430] text-black px-10 py-4 rounded-full text-lg font-bold">Watch Demo</a>
            </div>
        </header>
    );
};

export default Navbar;