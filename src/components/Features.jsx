import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";

const features = [
    {
        title: "Real-time Bus Tracking",
        desc: "Track the live location of school buses using GPS-enabled driver devices.",
        img: f1,
    },
    {
        title: "ETA & Delay Alerts",
        desc: "Get accurate arrival times and automatic alerts for delays.",
        img: f2,
    },
    {
        title: "Instant Notifications",
        desc: "Boarding, drop-off, and emergency notifications for parents.",
        img: f3,
    },
    {
        title: "Student Safety Monitoring",
        desc: "Ensure students board the correct bus and reach safely.",
        img: f4,
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-900">Features</h2>
                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        Designed to improve safety, transparency,
                        <br /> and communication between schools and parents.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={f.img}
                                alt={f.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/55"></div>

                            <div className="relative p-6 flex flex-col justify-end h-full">
                                <h3 className="text-white text-lg font-semibold">
                                    {f.title}
                                </h3>
                                <p className="text-gray-200 text-sm mt-2">
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
