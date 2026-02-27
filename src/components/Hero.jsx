import heroImage from "../assets/hero.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative w-full min-h-[100dvh] flex items-center justify-center bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Smoother gradient overlay */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-transparent via-black/60 to-[#000000]"></div>

            {/* Added pt-20 to ensure it clears the navbar on small screens */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-20">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] font-montserrat">
                    Real-Time Visibility, <br className="hidden sm:block" />
                    <span className="text-[#F4C430]">Total Peace of Mind.</span>
                </h1>

                <p className="mt-6 text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-inter">
                    Eliminate transport chaos. Give parents an Uber-style live tracking
                    experience, while your school saves lakhs on traditional GPS hardware.
                </p>
            </div>
        </section>
    );
};

export default Hero;