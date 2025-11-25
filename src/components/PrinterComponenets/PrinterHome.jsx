import React from "react";
import { PhoneCall } from "lucide-react";
import printer from "../../assets/Printerhome.webp";

export default function PrinterHome() {
    return (
        <div className="w-full bg-white text-black font-sans">

            
            <div className="w-full pt-18 bg-gray-900 text-white text-center py-3 font-semibold flex items-center justify-center gap-2">
                <PhoneCall size={18} className="text-white" />
                <a href="tel:+18888128678">Click to Call: 1-888-812-8678</a>
            </div>

            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-16 px-6 gap-10">

                
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Expert Printer <br /> Technical Support – Fast & Reliable
                    </h1>

                    <a
                        href="tel:+18888128678"
                        className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition"
                    >
                        Call Toll-Free: 1-888-812-8678
                    </a>

                    <p className="text-lg leading-relaxed">
                        There are various issues that occur with a printer regarding
                        maintenance or technical difficulties. We provide the Best Printer
                        Tech Support to resolve these issues quickly. Connect with our expert
                        team through our Printer Support Phone Number for instant help.
                    </p>
                </div>

                
                <div className="flex-1 flex justify-center">
                    <img
                        src={printer}
                        alt="Printer Support"
                        className="w-full max-w-md sm:max-w-lg object-cover"
                    />
                </div>

            </div>
        </div>
    );
}
