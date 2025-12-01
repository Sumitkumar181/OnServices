import React from "react";

export default function CtaAction() {
    return (
        <div className="w-full bg-[#4D8DFE] py-16 px-4 flex justify-center">
            <div className="bg-[#4D8DFE] rounded-2xl shadow-2xl p-6 md:p-12 max-w-7xl w-full text-center border border-blue-300/20">

                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
                    Ready to have a dependable IT team?
                </h2>

                
                <p className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
                    Call us today to discuss your IT service requirements. Our expert team is standing by to help your business thrive.
                </p>

                
                <a
                    href="tel:+18888128678"
                    className="bg-white text-blue-600 font-semibold py-3 px-6 sm:px-8 rounded-full shadow-md 
                                hover:shadow-lg transition text-sm sm:text-base inline-block"
                >
                    Call (888) 812-8678
                </a>
            </div>
        </div>
    );
}
