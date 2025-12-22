import banner from "../assets/banner.png";

const BannerCTA = () => {
    return (
        <section
            className="relative py-24 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white">
                    Want to see this in action?
                </h2>

                <p className="mt-3 text-gray-200">
                    Get in touch with us and see how bus tracking improves student safety.
                </p>

                <a
                    href="https://wa.me/7676213057"
                    target="_blank"
                    className="inline-block mt-6 bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
                >
                    Contact on WhatsApp
                </a>
            </div>
        </section>
    );
};

export default BannerCTA;
