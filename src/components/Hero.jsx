import heroImage from "../assets/hero.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen pt-20 flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
                    Real-Time School Bus Tracking for Student Safety
                </h2>

                <p className="mt-5 text-gray-100 max-w-xl mx-auto text-base leading-relaxed">
                    Monitor live bus locations, receive timely alerts, and ensure
                    safe student transportation with a reliable, school-focused
                    tracking system.
                </p>
            </div>

        </section>
    );
};

export default Hero;
