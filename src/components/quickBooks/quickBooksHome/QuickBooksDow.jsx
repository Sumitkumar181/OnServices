import React, { use, useState } from "react";
import deskpreplus from "../../../assets/desk-preplus.png"
import { FaDownload } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiMiniMinus } from "react-icons/hi2";
import qbprovider from "../../../assets/qb-provider-img.jpg"

const faqs = [
    {
        question: "Which QuickBooks Desktop Version is right for me?",
        answer:
            "Deciding which QuickBooks Desktop Version is right for you depends on which features you need or want and deciding how much money you want to spend. QuickBooks Enterprise is the most expensive of the three Desktop options with the most features. QuickBooks Premier is less expensive with numerous but fewer features. QuickBooks Pro is the least expensive with the fewest features. If you know you want a QuickBooks Desktop product, deciding which version to buy is simply deciding which features you don’t need and don’t want to pay for.",
    },
    {
        question: "How much does QuickBooks cleanup Or Reconciliation cost?",
        answer:
            "The first month of service for cleanup and onboarding is $399. After the first month, the ongoing Bookkeeping service is available in 3 different pricing Plan, depending on your company’s average monthly expenses over a period. to gain operational efficiency to have access to the best technology and infrastructure to gain access to a huge, tech-driven talent pool that could turn around work in a short time span with utmost accuracy",
    },
    {
        question: "How much does QuickBooks setup cost?",
        answer:
            "If you wish to Purchase Latest QuickBooks 2023 products form Evergreen Accouting Services including QuickBooks Pro, Premier, Enterprise, Payroll, Point of Sale and QuickBooks Online, You Can Get free setup and installation of QuickBooks license with us. Also, get free Consulting.",
    },
    {
        question: "How do I hire a QuickBooks expert?",
        answer:
            "You can visit the Find a Solution Evergreen Accouting Services website to look for an accountant or bookkeeper near you that offers their expertise in Quickbooks.Enter your region or location in the search bar and click Search.",
    },
    {
        question: "Which accounting software is the best for small and medium size businesses?",
        answer:
            "QuickBooks is the Number #1 rated Accounting Software for small and medium size businesses, QuickBooks Software helps to manage the SEMs, Mid-size, large size scaled industrial businesses by keeping the records of financial transactions monthly and also keep on interpreting, accounting, recording, reporting of business accounts and banking. It keeps on updating you on where your business growth stands.",
    },
    {
        question: "QuickBooks Cloud hosting is the best decision for the business?",
        answer:
            "Evergreen Accouting Services gives you flexibality to work form home or anywhere at any time on any device, qb cloud hosting gives you the freedom to acccess you quickbooks software from anywhere, anytime. You can work with your clien on the same quickbooks file at the same time from wherever you are. you can host any quickbooks desktop verision – QuickBooks Pro, QuickBooks Premier, QuickBooks Enterprise.",
    },
    {
        question: "When will QuickBooks 2024 be available?",
        answer:
            "The new QuickBooks Desktop version will be subscription based and scheduled to be released to businesses on October 14, 2023. QuickBooks Desktop 2023 subscriptions provide customers with the same locally-installed user interface, with added features and functionality that provides the best value and best-in-class product experience.",
    },
    {
        question: "QuickBooks Issues & Errors",
        answer:
            "quickbooks telephone, qb subscription, quickbooks payroll won t update, Quickbooks Payroll PS038 Error, quickbooks pro 3 users, quickbooks errors, quickbooks won’t open in windows 10/11, quickbooks error 1904, quickbooks desktop pro 2021 no subscription, quickbooks Data Protection not working, quickbooks payroll not working, how to fix payroll error in quickbooks online, quickbooks online easy start & payroll premium bundle, quickbooks multi user, QuickBooks Backup Failed, QuickBooks Pro Not Working on Windows 11, quickbooks desktop subscription renewal, quickbooks desktop 2022 no subscription, quickbooks repair utility, quickbooks help desktop, quickbooks desktop file doctor, intuit quickbooks plus annual subscription pro, how to call intuit, QuickBooks Keeps Crashing Windows 11, quickbooks not loading, Unrecoverable error in QuickBooks Desktop, quickbooks license renewal, quickbooks payroll issue, QuickBooks Has Stopped Working After Update Windows 10/11, quickbooks file corrupt, QuickBooks Running Slow, quickbooks hosting multi user access, QuickBooks Reconciliation for Cash Flow Management, Quickbooks Payroll Not Updating, quickbooks payroll support phone number 800, intuit quickbooks desktop, enterprise solutions quickbooks, how to migrate from quickbooks desktop to online, call intuit quickbooks, quickbooks file doctor, quickbooks payroll Data, repair quickbooks desktop, quickbooks pro 2021 non subscription, QuickBooks Data Recovery, quickbooks payroll subscription for desktop, quickbooks file repair, QuickBooks Server Busy Error, hosting quickbooks on a server, QuickBooks Multi-User issues, quickbooks online payroll help, host quickbooks in the cloud, renew quickbooks desktop subscription, quickbooks multiple users different locations, call quickbooks online, reactivate subscription quickbooks, call quickbooks help, renew subscription quickbooks desktop, quickbooks has stopped working, quickbooks unable to verify financial institution, how to update quickbooks desktop to the latest release, QuickBooks Desktop Multiple Users, QuickBooks Desktop Won’t Open, quickbooks payroll issue today, call quickbooks merchant services, quickbooks starts to open then closes, quickbooks payroll subscription inactive, quickbooks enterprise help, quickbooks repair company file, quickbooks error 1334, quickbooks desktop pro 2022 no subscription, quickbooks freezing, QuicKBooks Multi-User Mode Not Working Issue, QuickBooks Payroll Taxes Not Calculating, quickbooks troubleshooting, quickbooks repair, quickbooks issues today, quickbooks subscription, quickbooks payroll help, quickbooks premier plus, quickbooks server 2021, quickbooks enterprise licensing, QuickBooks Enterprise 2024 Keep Crashing, quickbooks unable to open company file, QuickBooks Reconciliation Errors, quickbooks payroll processing, quickbooks subscription has lapsed, QuickBooks Missing Bank Transactions, quickbooks payroll subscription, help with quickbooks online, QuickBooks Data Protect to back up files, quickbooks online reconcile bank account, quickbooks is frozen, how to contact quickbooks payroll support, bank feeds not working in quickbooks desktop, QuickBooks installation has failed, repair quickbooks installation, server for quickbooks, QuickBooks Desktop Migration Failed Unexpectedly Windows 11",
    },
];


const plans = [
    {
        title: "Simple Start",
        oldPrice: "$30.00",
        price: "$15.00",
        features: ["Track income & expenses", "Invoice & accept payments", "Maximize tax deductions", "Run general reports", "Capture & organize receipts", "Track miles", "Manage cash flow", "Track sales & sales tax", "Send estimates", "Manage 1099 contractors", "Connect 1 sales channel"],
        highlight: false,
    },
    {
        title: "Essentials",
        oldPrice: "$55.00",
        price: "$27.50",
        features: ["Track income & expenses", "Invoice & accept payments", "Maximize tax deductions", "Run general reports", "Capture & organize receipts", "Track miles", "Manage cash flow", "Track sales & sales tax", "Send estimates", "Manage 1099 contractors", "Connect 3 sales channel", "Includes 3 users", "Enter time"],
        highlight: true,
    },
    {
        title: "Plus",
        oldPrice: "$85.00",
        price: "$42.50",
        features: ["Track income & expenses", "Invoice & accept payments", "Maximize tax deductions", "Run general reports", "Capture & organize receipts", "Track miles", "Manage cash flow", "Track sales & sales tax", "Send estimates", "Manage 1099 contractors", "Connect all sales channel", "Includes 5 users", "Enter time", "Track inventory", "Track project profitability"],
        highlight: false,
    },
    {
        title: "Advanced",
        oldPrice: "$200.00",
        price: "$100.00",
        features: ["Track income & expenses", "Invoice & accept payments", "Maximize tax deductions", "Run general reports", "Capture & organize receipts", "Track miles", "Manage cash flow", "Track sales & sales tax", "Send estimates", "Manage 1099 contractors", "Connect all sales channel", "Includes 5 users", "Enter time", "Track inventory", "Track project profitability", "Business analytics with Excel", "Batch invoices & expenses", "Customize access by role", "Exclusive Premium Apps", "Dedicated account team", "On-demand online training", "Automate workflows", "Restore company data"],
        highlight: false,
    },
];




const products = [
    {
        title: "QuickBooks Pro",
        img: deskpreplus,
        links: [
            "QuickBooks Desktop Pro Plus 2024",
            "QuickBooks Desktop Pro Plus 2023",
            "QuickBooks Desktop Pro Plus 2022",
            "QuickBooks Desktop Pro 2021",
            "QuickBooks Desktop Pro 2020",
            "QuickBooks Desktop Pro 2019",
            "QuickBooks Desktop Pro 2018",
            "QuickBooks Desktop Pro 2017",
            "QuickBooks Desktop Pro 2016",
            "QuickBooks Desktop Pro 2015",
            "QuickBooks Desktop Pro 2014",
            "QuickBooks Desktop Pro 2013",
            "QuickBooks Desktop Pro 2012",
            "QuickBooks Desktop Pro 2011",
            "QuickBooks Desktop Pro 2010",
        ]
    },
    {
        title: "QuickBooks Premier",
        img: deskpreplus,
        links: [
            "QuickBooks Desktop Premier Plus 2024",
            "QuickBooks Desktop Premier Plus 2023",
            "QuickBooks Desktop Premier Plus 2022",
            "QuickBooks Desktop Premier 2021",
            "QuickBooks Desktop Premier 2020",
            "QuickBooks Desktop Premier 2019",
            "QuickBooks Desktop Premier 2018",
            "QuickBooks Desktop Premier 2017",
            "QuickBooks Desktop Premier 2016",
            "QuickBooks Desktop Premier 2015",
            "QuickBooks Desktop Premier 2014",
            "QuickBooks Desktop Premier 2013",
            "QuickBooks Desktop Premier 2012",
            "QuickBooks Desktop Premier 2011",
            "QuickBooks Desktop Premier 2010",
        ]
    },
    {
        title: "QuickBooks Enterprise",
        img: deskpreplus,
        links: [
            "QuickBooks Desktop Enterprise 2024",
            "QuickBooks Desktop Enterprise 2023",
            "QuickBooks Desktop Enterprise 2022",
            "QuickBooks Desktop Enterprise 2021",
            "QuickBooks Desktop Enterprise 2020",
            "QuickBooks Desktop Enterprise 2019",
            "QuickBooks Desktop Enterprise 2018",
            "QuickBooks Desktop Enterprise 2017",
            "QuickBooks Desktop Enterprise 2016",
            "QuickBooks Desktop Enterprise 2015",
            "QuickBooks Desktop Enterprise 2014",
            "QuickBooks Desktop Enterprise 2013",
            "QuickBooks Desktop Enterprise 2012",
            "QuickBooks Desktop Enterprise 2011",
            "QuickBooks Desktop Enterprise 2010",
        ]
    },
    {
        title: "QuickBooks Pro",
        img: deskpreplus,
        links: [
            "QuickBooks Desktop Pro Plus 2024",
            "QuickBooks Desktop Pro Plus 2023",
            "QuickBooks Desktop Pro Plus 2022",
            "QuickBooks Desktop Pro 2021",
            "QuickBooks Desktop Pro 2020",
            "QuickBooks Desktop Pro 2019",
            "QuickBooks Desktop Pro 2018",
            "QuickBooks Desktop Pro 2017",
            "QuickBooks Desktop Pro 2016",
            "QuickBooks Desktop Pro 2015",
            "QuickBooks Desktop Pro 2014",
            "QuickBooks Desktop Pro 2013",
            "QuickBooks Desktop Pro 2012",
            "QuickBooks Desktop Pro 2011",
            "QuickBooks Desktop Pro 2010",
        ]
    },
    {
        title: "QuickBooks Premier",
        img: deskpreplus,
        links: [
            "QuickBooks Desktop Premier Plus 2024",
            "QuickBooks Desktop Premier Plus 2023",
            "QuickBooks Desktop Premier Plus 2022",
            "QuickBooks Desktop Premier 2021",
            "QuickBooks Desktop Premier 2020",
            "QuickBooks Desktop Premier 2019",
            "QuickBooks Desktop Premier 2018",
            "QuickBooks Desktop Premier 2017",
            "QuickBooks Desktop Premier 2016",
            "QuickBooks Desktop Premier 2015",
            "QuickBooks Desktop Premier 2014",
            "QuickBooks Desktop Premier 2013",
            "QuickBooks Desktop Premier 2012",
            "QuickBooks Desktop Premier 2011",
            "QuickBooks Desktop Premier 2010",
        ]
    },
    {
        title: "QuickBooks Enterprise",
        img: deskpreplus,
        links: [
            "QuickBooks Desktop Enterprise 2024",
            "QuickBooks Desktop Enterprise 2023",
            "QuickBooks Desktop Enterprise 2022",
            "QuickBooks Desktop Enterprise 2021",
            "QuickBooks Desktop Enterprise 2020",
            "QuickBooks Desktop Enterprise 2019",
            "QuickBooks Desktop Enterprise 2018",
            "QuickBooks Desktop Enterprise 2017",
            "QuickBooks Desktop Enterprise 2016",
            "QuickBooks Desktop Enterprise 2015",
            "QuickBooks Desktop Enterprise 2014",
            "QuickBooks Desktop Enterprise 2013",
            "QuickBooks Desktop Enterprise 2012",
            "QuickBooks Desktop Enterprise 2011",
            "QuickBooks Desktop Enterprise 2010",
        ]
    },
];


export default function QuickBooksDow() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="w-full px-4 md:px-10 py-12">
                {/* <div className="w-full bg-white flex flex-col justify-center items-center text-center pt-16 px-4"> */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center  text-black mb-4">
                    We Support All QB Desktop & Online <br></br> Versions.
                </h2>


                {/* </div> */}
                <div className="grid grid-cols-1 mt-12 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {products.map((item, index) => (
                        <div key={index} className="text-center">


                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-52 h-auto mx-auto mb-4"
                            />


                            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>


                            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 mx-auto mb-6 transition">
                                <span><FaDownload /></span> Download
                            </button>


                            <ul className=" text-center text-lg mx-auto w-fit space-y-1 text-green-700 font-medium">
                                {item.links.map((link, i) => (
                                    <li key={i} className="cursor-pointer hover:text-green-900 transition">
                                        {link}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}

                </div>
            </div>
            <div className="w-full bg-white py-16 px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center  text-black mb-20">
                    Pricing Plans
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`rounded-xl p-8  shadow-md flex flex-col ${plan.highlight ? "bg-green-700 text-white scale-105" : "bg-white text-black"
                                }`}
                        >
                            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>


                            <p className="text-gray-400 line-through text-lg">{plan.oldPrice}</p>
                            <p className={`text-4xl font-extrabold mt-2 ${plan.highlight ? "text-white" : "text-black"}`}>
                                {plan.price}
                            </p>
                            <p className="text-sm mt-1 mb-6">/ per month</p>


                            <button
                                className={`w-full py-3 rounded-full font-medium transition-all ${plan.highlight
                                    ? "bg-black text-white hover:bg-gray-900"
                                    : "bg-green-700 text-white hover:bg-green-800"
                                    }`}
                            >
                                Purchase
                            </button>


                            <ul className="mt-6 space-y-3 text-sm">
                                {plan.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="text-green-600 font-bold">✔</span> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>


            <div className="w-full bg-white text-black font-sans">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-20 px-6 gap-10">

                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                            How We Support Your <br /> Business with QuickBooks
                        </h1>
                        <p className="mb-6 text-black text-2xl font-semibold uppercase leading-relaxed">
                            Unlock exclusive pricing on all Intuit QuickBooks products and solutions.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            QuickBooks or looking to upgrade, we’ll tailor a consulting plan to fit your unique needs. Our team of US-based, QuickBooks Certified ProAdvisors brings extensive experience across industries, supporting all versions of QuickBooks—including QuickBooks Online, Pro, Premier, Accountant Edition, and QuickBooks Enterprise.
                        </p>


                        <a
                            href="tel:+18888128678"
                            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition">
                            Call Toll-Free: 1-888-812-8678
                        </a>
                    </div>



                    <div className="flex-1 flex justify-center">
                        <img
                            src={qbprovider}
                            alt="Dashboard UI"
                            className="w-full max-w-lg"
                        />
                    </div>
                </div>
            </div>



            <div className="w-full bg-white text-black font-sans">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-20 px-6 gap-10">

                    <div className="flex-1 flex justify-center rounded-full">
                        <img
                            src={qbprovider}
                            alt="Dashboard UI"
                            className="w-full max-w-lg rounded-full"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                            See QuickBooks in Action
                        </h1>
                        <p className="mb-6 text-black text-2xl font-semibold uppercase leading-relaxed">
                            Experience QuickBooks small business accounting software today.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            QuickBooks helps you track and organize your finances for you, so you don’t have to worry about entering information manually. It makes tasks like bookkeeping, invoicing, time tracking, and more, automatic.
                        </p>


                        <a
                            href="tel:+18888128678"
                            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition">
                            Call To Connect: 1-888-812-8678
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white text-black font-sans">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-20 px-6 gap-10">

                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                            QuickBooks Solution Provider
                        </h1>
                       

                        <p className="text-lg leading-relaxed mb-6">
                            We can help you buy or update QuickBooks, outsource bookkeeping, or connect QuickBooks with other platforms.
                        </p>


                        <a
                            href="tel:+18888128678"
                            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition">
                            Call Us For Limited Discount: 1-888-812-8678
                        </a>
                    </div>



                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-lg aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src="https://www.youtube.com/embed/dfWELt0ifxw?start=8"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-white text-[#2a2b2b] px-4 sm:px-10 md:px-20 lg:px-32 font-[Geist Mono Fallback] w-full overflow-x-hidden box-border mt-10 mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center  text-black mb-20">
                    FAQs
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

    );
}
