import React, { useState } from 'react'
import { AiTwotonePrinter } from "react-icons/ai";
import PrinterHelp from "../../assets/printerHelp.jpg";

import { GoPlus } from "react-icons/go";
import { HiMiniMinus } from "react-icons/hi2";

const faqs = [
    {
        question: "Do you provide support for both home and office printers?",
        answer:
            "Yes. We offer printer troubleshooting and setup services for both personal/home printers and business/office printing systems.",
    },
    {
        question: "Can you help if my printer is not connecting to Wi-Fi?",
        answer:
            "Absolutely! Our technicians specialize in fixing wireless printing issues—whether your printer won’t connect to Wi-Fi, shows as “offline,” or won’t print from mobile devices.",
    },
    {
        question: "Do you provide software and driver installation help?",
        answer:
            "Yes. We assist with downloading, installing, and updating printer drivers and software to ensure smooth performance.",
    },
    {
        question: "Is your printer support available 24/7?",
        answer:
            "Yes, our team is available 24/7 to ensure you get help whenever you need it—even during weekends and holidays.",
    },
    {
        question: "Can you fix both hardware and software problems?",
        answer:
            "We specialize in software, setup, connectivity, and driver issues. For hardware problems (like broken parts), we can diagnose the issue and guide you to the right service center if replacement is needed.",
    },
    
];



const cards = [
    {
        icon: <AiTwotonePrinter className="w-10 h-10 text-blue-500" />, // Replace with your actual icon/image
        title: "Brother",
    },
    {
        icon: <AiTwotonePrinter className="w-10 h-10 text-blue-500" />, // Replace with actual icon
        title: "Epson",

    },
    {
        icon: <AiTwotonePrinter className="w-10 h-10 text-blue-500" />,
        title: "Mcafee",

    },
    {
        icon: <AiTwotonePrinter className="w-10 h-10 text-blue-500" />,
        title: "Avast",

    },
    {
        icon: <AiTwotonePrinter className="w-10 h-10 text-blue-500" />,
        title: "Norton",

    },
    {
        icon: <AiTwotonePrinter className="w-10 h-10 text-blue-500" />,
        title: "Webroot",

    },
];

export default function PrinterServices() {
     const [openIndex, setOpenIndex] = useState(null)
    
        const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    return (
        <div>
            <div className="w-full bg-white py-16 px-6 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
                    Explore Our Products
                </h2>




                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-7xl w-full">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-10 text-center hover:shadow-xl transition duration-300 border border-gray-100"
                        >

                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                {card.icon}
                            </div>



                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>



                            <p className="text-black leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                </div>



            </div>
            <div className="w-full bg-white py-16 px-6 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    24/7 Reliable Online Printer Support Services
                </h2>


                <p className="max-w-5xl text-black text-lg leading-relaxed mb-2">
                    Facing problems with your printer and unable to resolve them on your own? Don’t worry! Just connect with our Printer Support Phone Number and get your issues fixed instantly. Our team of highly skilled and experienced technicians is always ready to provide you with the best solutions for all your queries.
                </p>
                <p className="max-w-5xl text-black text-lg leading-relaxed mb-2">
                    We focus on building long-term customer relationships, which is why we always deliver the most reliable Printer Support Service. Our experts guide you with simple, step-by-step solutions to ensure your printer runs smoothly and without interruptions.
                </p>
                <p className="max-w-5xl text-black text-lg leading-relaxed mb-2">
                    You can reach us anytime through our toll-free Printer Customer Support Phone Number, available 24/7. No matter what type of printer issue you’re facing, our support team is here to help
                </p>

            </div>
            <div className="w-full bg-[#ece9e9] py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">


                    <div className="p-6 sm:p-8 md:p-10 rounded-xl space-y-6">


                        <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug">
                            Common Printer Support Issues We Handle:
                        </h2>

                        <ul className="list-disc pl-5 text-lg space-y-2 text-black">
                            <li>Installing a printer on Windows devices.</li>
                            <li>Connecting a printer to a network.</li>
                            <li>Assistance with locating and setting up network printers.</li>
                            <li>Printer installation on Mac OS and Chromebook.</li>
                            <li>Resolving Wi-Fi connection issues for wireless printers.</li>
                            <li>Network and wireless printer setup.</li>
                            <li>Complete printer setup support.</li>
                            <li>Troubleshooting printer errors and malfunctions.</li>
                            <li>Fixing paper jam problems.</li>
                            <li>Resolving “Printer Offline” issues.</li>
                        </ul>


                        <a
                            href="tel:+18888128678"
                            className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition"
                        >
                            Call Us: 1-888-812-8678
                        </a>

                    </div>



                    <div className="flex flex-col justify-center">
                        <img src={PrinterHelp} alt="qbprovider" className="h-96 w-full" />
                    </div>

                </div>
            </div>
             <section className="bg-white text-[#2a2b2b] px-4 sm:px-10 md:px-20 lg:px-32 font-[Geist Mono Fallback] w-full overflow-x-hidden box-border mt-10 mb-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-center  text-black mb-20">
                    Frequently asked questions
                            </h2>
                            <div className="space-y-4 font-[inter]">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-md py-3 px-4 sm:px-5 overflow-hidden shadow-sm hover:shadow-md transition"
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full flex justify-between items-center text-left text-gray-800 font-normal focus:outline-none"
                                        >
                                            <span className="text-base sm:text-lg font-semibold">
                                                {faq.question}
                                            </span>
                                            {openIndex === index ? (
                                                <HiMiniMinus className="w-5 h-5 text-[#2a2b2b]" />
                                            ) : (
                                                <GoPlus className="w-5 h-5 text-[#2a2b2b]" />
                                            )}
                                        </button>
            
                                        <div
                                            className={`text-gray-600 text-sm sm:text-base leading-relaxed transition-all duration-300 ${openIndex === index
                                                ? "max-h-40 opacity-100 mt-1.5"
                                                : "max-h-0 opacity-0"
                                                } overflow-hidden`}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
        </div>
    )
}
