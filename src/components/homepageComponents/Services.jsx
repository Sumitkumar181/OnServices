import React from "react";

export default function Services() {
    const cards = [
        {
            title: "Managed IT Provider",
            description:
                "The managed IT services your company needs to stay up and running.",
            items: [
                "24/7 Fast Response Times",
                "Phone, Chat, & Email",
                "Computers, Servers, Printers, Scanners, Devices and Applications",
            ],
        },
        {
            title: "Worry-Free Experience",
            description:
                "Problem resolution, network stability, data protection, cyber security, and more.",
            items: [
                "Network Security",
                "Ransomware Protection",
                "Data Backup & Recovery",
            ],
        },
        {
            title: "Monitoring & Management",
            description:
                "Get alerted when your systems are having problems or potential arising threats before they grow.",
            items: [
                "Early problem detections",
                "Fewer downtimes & Delays",
                "Reduction of loss & liabilities",
            ],
        },
    ];

    return (
        <div className="w-full bg-white py-12 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full px-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition duration-300 border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h2>
                        <p className="text-gray-600 mb-6">{card.description}</p>
                        <ul className="space-y-3">
                            {card.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-blue-500 font-bold">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
