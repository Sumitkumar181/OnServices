import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/service" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="w-full shadow-sm fixed top-0 left-0 bg-white z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">

                
                <div className="text-2xl font-semibold">
                    on<span className="font-semibold">Services</span>
                </div>

                
                <div className="hidden md:flex items-center space-x-7 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setActive(item.name)}
                            className={`${active === item.name ? "text-blue-500 font-medium" : "text-black"
                                } hover:text-blue-500 text-base transition`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a href="tel:18778431717" className="text-blue-500 font-medium text-base">
                        1-888-812-8678
                    </a>
                </div>

                
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setMenuOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </div>

            
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform 
                ${menuOpen ? "translate-x-0" : "translate-x-full"} 
                transition-transform duration-300 ease-out`}
            >
               
                <div className="flex justify-end p-4">
                    <button onClick={() => setMenuOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                
                <div className="flex flex-col space-y-6 px-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => {
                                setActive(item.name);
                                setMenuOpen(false);
                            }}
                            className={`text-lg ${active === item.name
                                    ? "text-blue-500 font-semibold"
                                    : "text-black"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <a
                        href="tel:18778431717"
                        className="text-blue-500 font-semibold text-lg"
                    >
                        1-888-812-8678
                    </a>
                </div>
            </div>

            
            {menuOpen && (
                <div
                    className="fixed inset-0  bg-opacity-10 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </nav>
    );
}
