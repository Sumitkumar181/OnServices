import React from 'react'
import { Server, ShieldCheck } from "lucide-react";


const cards = [
    {
        icon: <Server className="w-10 h-10 text-blue-500" />, // Replace with your actual icon/image
        title: "Managed IT Services",
        description:
            "onService becomes your single contact for all technology services including our unrivaled 24/7 IT support desk that handles comprehensive monitoring for your infrastructure, application management, server management, and proactive services with automation to keep your operations running.",
    },
    {
        icon: <Server className="w-10 h-10 text-blue-500" />, // Replace with actual icon
        title: "Server Management",
        description:
            "The onService team understands that file sharing, applications, data, workstations, and more are dependent on a working server and keeping your server up is critical to your operations. Maintaining a backup of your important information, a recovery plan in the event of crashes, monitoring to prevent problems and more.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
        title: "Network Security",
        description:
            "A security training and audit to ensure your network is secure, files are shared safely, and printers are networked and working properly are all important aspects of your day to day operations. Leave it to us to maintain this for you.",
    },
];

export default function OurServices() {
  return (
      <div className="w-full bg-white py-16 px-6 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Services
          </h1>


          <p className="max-w-3xl text-black text-lg leading-relaxed mb-12">
              Our core services are fit for home and small business owners that need services for 1 - 50 computers or employees. This allows us to keep it simple, provide options to use us as you need it, the ability to get fast help, and scale up and down as required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
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
  )
}
