import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";

const features = [
    {
        title: "Live Trip Monitoring",
        desc: "Parents can view the bus moving in real-time on a map. No more guessing or anxious waiting at the bus stop.",
        img: f1,
    },
    {
        title: "Driver Identification",
        desc: "Automated alerts via WhatsApp or SMS when the bus is approaching, departing, or facing traffic delays.",
        img: f2,
    },
    {
        title: "Smart Notification System",
        desc: "Verified driver profiles with photos and direct 'Click-to-Call' buttons ensure parents know exactly who is driving.",
        img: f3,
    },
    {
        title: "Zero-Hardware Implementation",
        desc: "We use the driver's existing smartphone for tracking. No expensive GPS boxes to buy, install, or repair.",
        img: f4,
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-[#050505] border-t border-neutral-900">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header matching the new dark theme */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-[44px] font-bold text-white tracking-tight font-montserrat leading-[1.15]">
                        Why Schools <span className="text-[#F4C430]">Partner With Us.</span>
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-base md:text-lg font-inter">
                        We bridge the gap between school and home with a solution that is
                        easy to deploy and simple to use.
                    </p>
                </div>

                {/* Kept your exact grid layout, just updated the styling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl group border border-neutral-800/60"
                        >
                            {/* Background Image */}
                            <img
                                src={f.img}
                                alt={f.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Deepened dark gradient for perfect text contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

                            {/* Content */}
                            <div className="relative p-8 md:p-10 flex flex-col justify-end h-full z-10">
                                <h3 className="text-white text-2xl font-bold mb-3 font-montserrat tracking-tight group-hover:text-[#F4C430] transition-colors">
                                    {f.title}
                                </h3>
                                <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-inter">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;