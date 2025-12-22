const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-white font-semibold text-lg">
                    Bus Tracking
                </h1>

                <nav className="space-x-6 text-sm text-gray-200">
                    <a href="#home" className="hover:text-white">Home</a>
                    <a href="#features" className="hover:text-white">Features</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
