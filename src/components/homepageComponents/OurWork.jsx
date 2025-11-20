import React from "react";
import itsupport from "../../assets/it-support-1.jpg"
import team from "../../assets/team-collab-2.jpg"
import ServerRoom from "../../assets/server-room-1.jpg"
import Office from "../../assets/home-office-1.jpg"


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

export default function OurWork() {
    return (
        <div className="w-full bg-[#f3f2f2] py-16 px-6 flex flex-col items-center text-center">
           
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Specialize in Helping Businesses With 1 to 50 Employees.
            </h2>

            
            <p className="max-w-3xl text-gray-600 text-lg leading-relaxed mb-12">
                Today's work environment can be almost anywhere and your business and employees need to
                know that someone in IT is available whenever they experience a problem that can hamper
                their workflow. We've got the experience and capabilities that you need to keep your
                operations running smoothly.
            </p>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full mt-6">
                <img
                    src={itsupport} 
                    alt="IT technician working"
                    className="w-full h-80 object-cover rounded-2xl shadow-md"
                />

                <img
                    src={team} 
                    alt="Team collaborating"
                    className="w-full h-80 object-cover rounded-2xl shadow-md"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mt-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white border  border-gray-200 shadow-md rounded-2xl text-left  px-6 py-8 "
                    >
                       
                        <div className="text-blue-500 text-2xl mb-4">{card.icon}</div>

                        
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                            {card.title}
                        </h2>

                        
                        <p className="text-black  text-sm">{card.text}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full mt-6">
                <img
                    src={ServerRoom}
                    alt="IT technician working"
                    className="w-full h-80 object-cover rounded-2xl shadow-md"
                />

                <img
                    src={Office}
                    alt="Team collaborating"
                    className="w-full h-80 object-cover rounded-2xl shadow-md"
                />
            </div>
        </div>
    );
}
