import React from "react";
import { GiProgression } from "react-icons/gi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { LiaBookSolid } from "react-icons/lia";
import { GiCalculator } from "react-icons/gi";
import { MdManageHistory } from "react-icons/md";
import qbprovider from "../../../assets/qb-provider-img.jpg"


const Terms = [
    {
        icon: <GiProgression />,
        title: "24/7 Support",
        text: `We're dedicated to driving progress and delivering the best results, with round-the-clock availability to assist you.`,
    },
    {
        icon: <LiaHandHoldingUsdSolid />,
        title: "Exceptional Service",
        text: `We foster a friendly, helpful relationship with our valued customers. Our expert team is dedicated to exceeding your expectations and delivering service of the highest quality.`,
    },
    {
        icon: <MdOutlinePayments />,
        title: "Transparent Pricing",
        text: `No hidden fees or surprise charges—pay only for what you use.`,
    },
    {
        icon: <LiaBookSolid />,
        title: "Fuel Your Business Growth",
        text: `We guarantee a market-leading position with no competition in your way. Your business will always be at the forefront as we drive growth beyond your greatest aspirations.`,
    },
    {
        icon: <GiCalculator />,
        title: "Scalable Solutions",
        text: `With a team of diverse bookkeeping experts, you’ll always have the support you need. As your business grows, we scale with you, ensuring your books stay organized every step of the way.`,
    },
    {
        icon: <MdManageHistory />,
        title: "Trusted and Experienced",
        text: `With years of experience supporting businesses with their bookkeeping, we’ve earned their trust as the go-to choice for reliable financial management.`,
    },
];




const product = [
    "QuickBooks for Mac",
    "QuickBooks",
    "QuickBooks Commerce",
    "QuickBooks Payments",
    "QuickBooks Online",
    "QuickBooks Desktop",
];

const cards = [
    {
        icon: <GiProgression />,
        title: "Instantly See Your Profit",
        text: `Gain a clear snapshot of your earnings and expenses over time.`,
    },
    {
        icon: <LiaHandHoldingUsdSolid />,
        title: "Simplify Payroll for Your Team",
        text: `Easily manage payroll while we handle your payroll taxes for you.`,
    },
    {
        icon: <MdOutlinePayments />,
        title: "Receive Payments Anywhere",
        text: `Accept payments online or on the go via card, eCheck, ACH, and more.`,
    },
    {
        icon: <LiaBookSolid />,
        title: "Handle Your Books",
        text: `Keep your books organized year-round and ready for tax season without the hassle.`,
    },
    {
        icon: <GiCalculator />,
        title: "Monitor Your Expenses",
        text: `Stay on top of your spending and capture every tax deduction.`,
    },
    {
        icon: <MdManageHistory />,
        title: "Track and manage time",
        text: `Easily track, edit, and approve work hours from any device.`,
    },
];


export default function QuickBooksProduct() {
    return (
        <div className="font-nunito w-full">

           
            <div className="max-w-6xl w-full mx-auto shadow-2xl  
                      flex flex-col md:flex-row items-center justify-between 
                      px-6 md:px-20 py-6 gap-6">

                
                <div className="h-20 w-full md:w-72 flex flex-col items-center justify-center text-center">
                    <h4 className="text-xl md:text-2xl font-semibold">28 years experience</h4>
                    <p className="text-base">helping small businesses</p>
                </div>

                
                <div className="h-20 w-full md:w-72 flex flex-col items-center justify-center text-center">
                    <span className="flex items-center gap-2">
                        <h4 className="text-xl md:text-2xl font-semibold">4.5</h4>
                        <div className="flex text-[#f0ad4e] text-xl md:text-2xl">
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span className="text-gray-300">&#9733;</span>
                        </div>
                    </span>

                    <p className="text-base">6400+ customer reviews on Capterra</p>
                </div>

                
                <div className="h-20 w-full md:w-72 flex flex-col items-center justify-center text-center">
                    <h4 className="text-xl md:text-2xl font-semibold">7 million customers</h4>
                    <p className="text-base">helping small businesses</p>
                </div>
            </div>

           
            <div className="w-full bg-white flex flex-col justify-center items-center text-center pt-16 px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
                    Select a product
                </h2>

                <p className="max-w-3xl text-black text-lg md:text-xl leading-relaxed mb-12">
                    Selecting a product below helps us to customize your help experience with us.
                </p>
            </div>

            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 px-4 md:px-10 mb-20 justify-items-center">

                {product.map((item, index) => (
                    <div
                        key={index}
                        className="h-20 w-full max-w-[140px] md:max-w-[160px] 
      flex flex-col items-center justify-center text-center 
      shadow-md bg-white hover:shadow-lg transition cursor-pointer rounded"
                    >
                        <p className="text-sm md:text-lg">{item}</p>
                    </div>
                ))}

            </div>
            <div className="w-full bg-white py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                    
                    <div className="bg-[#d2dee3] p-6 sm:p-8 md:p-10 rounded-xl space-y-6">

                        <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
                            QuickBooks Proadvisor Help For Every Situation
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                            From single user installs to complex, multi-user QuickBooks Enterprise
                            hosted setups, our award winning team of QuickBooks ProAdvisors has
                            you covered.
                        </p>

                        <a
                            href="tel:+18888128678"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition"
                        >
                            Call Us At: (888) 812-8678
                        </a>

                    </div>


                   
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold">
                            Getting QuickBooks Errors? Need Quick Product Support?
                        </h2>

                        <p className="mt-3 text-gray-700">
                            We’re here to help.
                        </p>

                        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-10 rounded-full">
                            Chat With Us
                        </button>
                    </div>

                </div>
            </div>
            <div className="w-full bg-[#2d2d2d] text-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            QuickBooks 2024 <br /> Help & Services
                        </h2>

                        <p className="mt-6 text-gray-300 leading-relaxed">
                            Our aim is to provide expert QuickBooks assistance, enabling you to return
                            to your business promptly. Get benefit of our swift response times,
                            transparent and proactive communication from our experienced QuickBooks
                            Experts based in the US, and a committed long-term partner ready to
                            support you whenever required.
                        </p>
                    </div>

                    
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="text-sm mb-1 block">Full Name</label>
                                <input type="text" className="w-full p-3 rounded  bg-white  text-black" />
                            </div>
                            <div>
                                <label className="text-sm mb-1 block">Email</label>
                                <input type="email" className="w-full p-3 rounded bg-white text-black" />
                            </div>
                            <div>
                                <label className="text-sm mb-1 block">Phone</label>
                                <input type="text" className="w-full p-3 rounded bg-white text-black" />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label className="text-sm mb-1 block">How Can We Help?</label>
                            <textarea className="w-full p-3 h-32 rounded border bg-white text-black"></textarea>
                        </div>

                        <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded text-lg font-medium">
                            Send
                        </button>
                    </div>

                </div>
            </div>

            <div className="w-full py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
                        >
                            <div className="text-blue-500 text-4xl mb-4">
                                {card.icon}
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                {card.title}
                            </h2>

                            <p className="text-black text-lg leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>


            <div className="w-full bg-[#ece9e9] py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">


                    <div className="p-6 sm:p-8 md:p-10 rounded-xl space-y-6">

                        
                        <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug">
                            Expert QuickBooks
                        </h2>

                        
                        <p className="text-black text-xl sm:text-2xl font-semibold leading-relaxed">
                            Top Rated QuickBooks Solution Provider
                        </p>

                        
                        <ul className="list-disc pl-5 text-lg space-y-2 text-black">
                            <li>QuickBooks Setup Services</li>
                            <li>QuickBooks File Issues</li>
                            <li>QuickBooks Data Conversion</li>
                        </ul>

                        
                        <a
                            href="tel:+18888128678"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition"
                        >
                            Call Us for Limited Discount: (888) 812-8678
                        </a>

                    </div>



                    <div className="flex flex-col justify-center">
                        <img src={qbprovider} alt="qbprovider" className="h-full w-full" />
                    </div>

                </div>
            </div>

            <div className="w-full bg-white flex flex-col justify-center items-center text-center pt-16 px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
                    Simplifying Your Business Finances
                </h2>

                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-7xl w-full py-6 mx-auto">
                {Terms.map((term, index) => (
                    <div
                        key={index}
                        className="bg-[#ebeeff] max-w-7xl px-4 w-full mx-auto  text-left  py-8 "
                    >

                        <div className="text-blue-500 text-4xl mb-4">{term.icon}</div>


                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            {term.title}
                        </h2>


                        <p className="text-black  text-lg">{term.text}</p>
                    </div>
                ))}
            </div>


        </div>
    );
}
