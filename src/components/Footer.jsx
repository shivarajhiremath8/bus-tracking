import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                <p className="font-inter">
                    © 2026 Pixelamedia. All rights reserved.
                </p>

                <div className="flex gap-6 mt-4 sm:mt-0 font-inter">
                    <Link to="/terms" className="hover:text-[#F4C430] transition-colors">
                        Terms & Conditions
                    </Link>
                    <Link to="/privacy" className="hover:text-[#F4C430] transition-colors">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;