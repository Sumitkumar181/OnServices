import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-[#d1d1d1] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
                
                <div>
                    <h2 className="text-xl  font-semibold">OnServices</h2>
                    <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                        Professional IT Support & Managed
                        <br /> Services for Small Businesses
                    </p>
                </div>

                
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                        <li><Link to="/" > Home</Link></li>
                        <li><Link to="/about" >About Us</Link></li>
                        <li> <Link to="/service" >Services</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Ouick Books</h3>
                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                        <li><Link to="/quick-books" > Ouick Books Home</Link></li>
                        <li><Link to="/quick-books/desktop" >Quick Books Desktop</Link></li>
                        <li> <Link to="/service" >Services</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <div className="mt-4 space-y-3 text-gray-700 text-sm">
                        <p className="flex items-center space-x-2">
                            <Phone size={16} className="text-blue-600" />
                            <span>1-888-812-8678</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <Mail size={16} className="text-blue-600" />
                            <span>admin(at)onservices.us</span>
                        </p>
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Availability</h3>
                    <p className="mt-4 text-gray-700 text-sm flex items-start space-x-2">
                        <Clock size={16} className="mt-1 text-blue-600" />
                        <span>
                            Contact us Monday - Saturday from
                            <br /> 8am to 10pm Central
                        </span>
                    </p>
                </div>

                
                
            </div>

            
            <div className="max-w-7xl mx-auto mt-10 px-4">
                <div className="w-full border-t border-[#d1d1d1] pt-6 text-center text-sm text-gray-600">
                    <p>© 2025 onService. All rights reserved.</p>

                    <div className="mt-2 space-x-6">
                        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-600">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}