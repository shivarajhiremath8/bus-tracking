import heroImage from "../assets/hero.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen pt-20 flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-white text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
                    Real-Time Visibility, <br/>Total Peace of Mind
                </h2>

                <p className="mt-6 text-gray-100 max-w-2xl mx-auto text-lg leading-relaxed">
                    Eliminate uncertainty for parents and schools. Monitor live bus locations,
                    receive automated alerts, and ensure student safety with our
                    <strong> zero-hardware</strong> tracking solution.
                </p>
            </div>

        </section>
    );
};

export default Hero;