const Footer = () => {
    return (
        <footer className="bg-black text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                <p>
                    © {new Date().getFullYear()} Pixelamedia. All rights reserved.
                </p>

                <div className="flex gap-4 mt-3 sm:mt-0">
                    <a href="#" className="hover:text-white">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-white">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
