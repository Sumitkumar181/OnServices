import React from 'react'
import businessmeeting from "../../assets/business-meeting.jpg"
import itmonitoring from "../../assets/it-monitoring.jpg"
import smallbusiness from "../../assets/small-business.jpg"
import networksetup from "../../assets/network-setup.jpg"

const cards = [
    {
        icon: "✔",
        title: "No Long-Term Commitments",
        text: `Monthly agreements that do not require long-term commitments,
      as well as our "pay-as-needed" options, make it easy to have access
      to all of the benefits of a full-time IT staff without getting bound
      to long-term contracts.`,
    },
    {
        icon: "✔",
        title: "More Flexibility, Availability, and Scalability",
        text: `Our IT team works as an extension to your business at a fraction of the cost you would need to pay each IT service engineer that you have onsite. We can scale up and down as needed`,
    },
    {
        icon: "✔",
        title: "Quick Responses + Monitoring for Prevention",
        text: `Our leading industry tools and infrastructure allows us the ability to check for early warning signs of problems and fix them before things get out of hand. Your IT team with us is always a call, chat, or email away.`,
    },
];


export default function AboutHeroSection() {
    return (
        <div>
            <div className="w-full bg-[#f1efef] pb-10 pt-26  px-6 flex flex-col justify-end items-center text-center min-h-[40vh]">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    About Us
                </h1>


                <p className="max-w-3xl text-black text-lg leading-relaxed mb-12">
                    Home / About Us
                </p>
            </div>
            <div className="w-full bg-white py-16 px-6 flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Why Choose Us
                </h2>


                <p className="max-w-4xl  text-black text-base text-start  leading-relaxed mb-4">
                    onService is a MSP providing managed IT services to small businesses. We specialize in working with clients that have home based businesses, home based teams, and offices with 1 - 50 employees / computers.
                </p>
                <p className="max-w-4xl text-black text-base text-start  leading-relaxed mb-4">
                    onService exists to develop IT service partnerships and forge solutions for our clients that accelerate growth, flexibility, cost savings, and improvements in operational efficiencies that allow your team to continue operating.
                </p>
                <p className="max-w-4xl text-black text-base text-start  leading-relaxed mb-4">
                    By partnering with us as your IT service, you have the same level of support as in-house staff at a fraction of the cost. We grow with you and are a flexible option that can scale from 1 computer up to 50 computers / employees as needed. The onService team integrates with your organization to bring a more cohesive experience for IT support and managed services.
                </p>
            </div>

            <div className="w-full bg-[#f7f7f7] py-16 px-6 flex flex-col items-center text-center">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    We Specialize in Helping Businesses With 1 to 50 Employees.
                </h1>


                <p className="max-w-3xl text-black text-lg leading-relaxed mb-12">
                    Today's work environment can be almost anywhere and your business and employees need to
                    know that someone in IT is available whenever they experience a problem that can hamper
                    their workflow. We've got the experience and capabilities that you need to keep your
                    operations running smoothly.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full mt-6">
                    <img
                        src={businessmeeting}
                        alt="IT technician working"
                        className="w-full h-80 object-cover rounded-2xl shadow-md"
                    />

                    <img
                        src={itmonitoring}
                        alt="Team collaborating"
                        className="w-full h-80 object-cover rounded-2xl shadow-md"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mt-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white border  border-gray-200 shadow-md rounded-2xl text-left  px-6 py-8 "
                        >

                            <div className="text-blue-500 text-2xl mb-4">{card.icon}</div>


                            <h2 className="text-xl font-bold text-gray-900 mb-3">
                                {card.title}
                            </h2>


                            <p className="text-black text-sm">{card.text}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full mt-8">
                    <img
                        src={smallbusiness}
                        alt="IT technician working"
                        className="w-full h-80 object-cover rounded-2xl shadow-md"
                    />

                    <img
                        src={networksetup}
                        alt="Team collaborating"
                        className="w-full h-80 object-cover rounded-2xl shadow-md"
                    />
                </div>
            </div>
        </div>





    )
}
