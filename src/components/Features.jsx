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
        title: "Driver Identification ",
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
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-900">Why Schools Partner With Us</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We bridge the gap between school and home with a solution that is 
                        easy to deploy and simple to use.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="relative h-72 rounded-xl overflow-hidden shadow-lg group"
                        >
                            <img
                                src={f.img}
                                alt={f.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                            <div className="relative p-8 flex flex-col justify-end h-full">
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {f.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
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