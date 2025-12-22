const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Contact Us
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Let us know your requirements and we’ll get back to you.
                    </p>
                </div>

                <form className="bg-white p-8 rounded-xl shadow-md space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Phone"
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="School / Company"
                            className="input"
                        />
                    </div>

                    <textarea
                        rows="4"
                        placeholder="Message"
                        className="input"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
