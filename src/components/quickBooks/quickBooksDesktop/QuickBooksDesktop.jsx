import React from 'react'
import deskpreplus from "../../../assets/desk-preplus.png"
import expertise from "../../../assets/expertise.jpg"
import { BsBank } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdAutoGraph } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { BiReceipt } from "react-icons/bi";
import { ImList } from "react-icons/im";
import { TfiWallet } from "react-icons/tfi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { TbReceiptTax } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";



const WhyChoose = [
    {
        img: expertise,
        title: "Proven Expertise and Reputation",
        text: `With a rich history of delivering QuickBooks Desktop solutions, our company stands out for its unwavering commitment to providing reliable and effective financial management solutions. Our track record is a testament to our expertise, and countless satisfied clients endorse our capabilities.`,
    },
    {
        img: expertise,
        title: "Certification of Excellence",
        text: `Our team is comprised of certified QuickBooks Desktop experts, ensuring that our clients benefit from the highest level of proficiency and knowledge in utilizing the software for their business needs.`,
    },
    {
        img: expertise,
        title: "Tailored Solutions and Seamless Integration",
        text: `Customizing QuickBooks Desktop to align seamlessly with your unique business requirements is our forte. We offer a range of customization options to optimize the software for your specific workflows, and our solutions integrate seamlessly with other essential tools and software commonly used in your industry.`,
    },
    {
        img: expertise,
        title: "Comprehensive Training and Support",
        text: `Mastering QuickBooks Desktop is crucial, and we support our clients through the journey. Our comprehensive training programs and ongoing support empower clients to navigate the software with confidence and efficiency.`,
    },
    {
        img: expertise,
        title: "Cutting-Edge Knowledge",
        text: `Staying ahead of the curve, we are dedicated to staying informed about the latest updates and features in QuickBooks Desktop. This commitment allows us to offer our clients cutting-edge solutions that leverage the full potential of the software.`,
    },
    {
        img: expertise,
        title: "Data Security and Compliance Assurance",
        text: `Security of financial data is our top priority. Our services are designed with a robust focus on data security, and we guarantee compliance with all relevant regulations, providing you with the assurance of a secure and compliant financial environment.`,
    },
    {
        img: expertise,
        title: "Cost-Effective Excellence",
        text: `Our services not only deliver efficiency but also cost-effectiveness. We provide solutions that offer exceptional value for money, enabling your business to leverage the full spectrum of QuickBooks Desktop without exceeding your budget.`,
    },
    
];











import { MdOutlinePayments } from "react-icons/md";
import { LiaBookSolid } from "react-icons/lia";
import { GiCalculator } from "react-icons/gi";
import { MdManageHistory } from "react-icons/md";

const Terms = [
    {
        icon: <BsBank />,
        title: "Bank Reconciliation",
        text: `Streamline reconciliation by connecting and reconciling bank accounts within the software.`,
    },
    {
        icon: <TbReportSearch />,
        title: "Comprehensive Reports",
        text: `Generate detailed financial reports like profit and loss statements and balance sheets for deeper insights.`,
    },
    {
        icon: <LiaFileInvoiceSolid />,
        title: "Custom Invoices",
        text: `Craft professional, customizable invoices with your company logo and personalized details.`,
    },
    {
        icon: <MdAutoGraph />,
        title: "Invoice Tracking",
        text: `Monitor invoice status, track payments, and send reminders for outstanding balances.`,
    },
    {
        icon: <RiRefund2Line />,
        title: "Efficient Expense Management",
        text: `Track and categorize business expenses seamlessly for better budget control.`,
    },
    {
        icon: <BiReceipt />,
        title: "Receipt Attachments",
        text: `Attach receipts to transactions for accurate record-keeping and audit trails.`,
    },
    {
        icon: <ImList />,
        title: "Real-time Inventory Tracking",
        text: `Manage and track inventory levels in real-time, ensuring accurate stock control.`,
    },
    {
        icon: <TfiWallet />,
        title: "Purchase Order Efficiency",
        text: `Create and manage purchase orders to streamline the ordering process.`,
    },
    {
        icon: <LiaHandHoldingUsdSolid />,
        title: "Integrated Payroll",
        text: `Seamlessly integrate payroll processing into the accounting system for accurate salary disbursement.`,
    },
    {
        icon: <TbReceiptTax />,
        title: "Tax Compliance",
        text: `Stay compliant with tax regulations by automating payroll tax calculations.`,
    },
    {
        icon: <GrUserAdmin />,
        title: "Multi-User Access",
        text: `Enable multiple users to access the software simultaneously, fostering collaboration.`,
    },
    {
        icon: <FiUsers />,
        title: "Custom User Permissions",
        text: `Assign different access levels and permissions for enhanced data security.`,
    },
    {
        icon: <LiaBookSolid />,
        title: "Robust Data Encryption",
        text: `Ensure the security of sensitive financial data through advanced encryption measures.`,
    },
    {
        icon: <GiCalculator />,
        title: "Automatic Backup",
        text: `Schedule automatic backups to prevent data loss and expedite recovery in unforeseen events.`,
    },
    {
        icon: <MdManageHistory />,
        title: "Third-Party Connections",
        text: `Connect QuickBooks Desktop with various third-party applications to expand functionality.`,
    },
    {
        icon: <LiaBookSolid />,
        title: "Vendor Bill Management",
        text: `Track and manage bills from vendors for timely payments and robust vendor relationships.`,
    },
    {
        icon: <GiCalculator />,
        title: "Tailored Reports",
        text: `Customize reports to align with specific business needs for more insightful analysis.`,
    },
    {
        icon: <MdManageHistory />,
        title: "Chart of Accounts Customization",
        text: `Personalize the chart of accounts to match the unique structure of your business.`,
    },
];

export default function QuickBooksDesktop() {
    return (
        <div>
            <div className="w-full bg-[#1c1c1c] text-white py-24 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                    
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            QuickBooks Desktop
                        </h1>

                        <p className="text-lg text-gray-300 mt-4">
                            Your Business, Our Solutions: QuickBooks Desktop Innovations
                        </p>

                        
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="tel:+18888128678"
                                className="px-8 py-4 bg-[#0ca573] rounded-full text-white font-semibold text-lg shadow-lg hover:bg-[#0f8860] transition"
                            >
                                Call Us At: 1-888-812-8678
                            </a>

                            <button className="px-8 py-4 rounded-full border border-gray-400 text-gray-300 font-semibold text-lg hover:bg-gray-700 transition">
                                Request A Callback
                            </button>
                        </div>
                    </div>

                    
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img
                        src={deskpreplus}  
                        alt="QuickBooks Desktop Box"
                            className="w-52 md:w-64 drop-shadow-lg"
                        />
                    </div>
                </div>

                
                <div className="max-w-6xl mx-auto mt-16">
                    <h2 className="text-2xl font-semibold">Overview</h2>

                    <div className="w-14 h-1 bg-gray-500 mt-2 mb-6"></div>

                    <p className="text-gray-300 leading-relaxed text-lg">
                        QuickBooks Desktop is an accounting software developed by Intuit that caters to small and medium-sized businesses. It is designed to help users manage their finances, track expenses, and streamline various accounting tasks. QuickBooks Desktop comes in several editions, with the most common ones being QuickBooks Pro, QuickBooks Premier, and QuickBooks Enterprise.
                    </p>
                </div>
            </div>
            <div className="w-full bg-white flex flex-col justify-center items-center text-center pt-16 px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
                    Features of QuickBooks Online
                </h2>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-7xl w-full py-6 mx-auto">
                {Terms.map((term, index) => (
                    <div
                        key={index}
                        className="shadow-md max-w-7xl px-4 w-full mx-auto  text-left  py-8 "
                    >

                        <div className=" text-4xl mb-4">{term.icon}</div>


                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            {term.title}
                        </h2>


                        <p className="text-black  text-lg">{term.text}</p>
                    </div>
                ))}
            </div>

            <div className="w-full bg-white flex flex-col justify-center items-center text-center pt-16 px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
                    Why Choose Evergreen Accounting <br></br> for QuickBooks Desktop?
                </h2>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-7xl w-full py-6 mx-auto">
                {WhyChoose.map((term, index) => (
                    <div
                        key={index}
                        className="shadow-md max-w-7xl px-4 w-full mx-auto  text-left  py-8 "
                    >

                        <img src={term.img} alt={term.img} className='' />


                        <h2 className="text-2xl font-bold mt-6 text-gray-900 mb-3">
                            {term.title}
                        </h2>


                        <p className="text-black  text-lg">{term.text}</p>
                    </div>
                ))}
            </div>

            <div
                className="relative w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${expertise})`,
                }}
            >
                
                <div className="absolute inset-0 bg-black/70 bg-opacity-70"></div>

               
                <div className="relative z-10 max-w-4xl mx-auto text-center text-white py-20 px-4 space-y-6">

                   
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
                        TALK TO THE EXPERTS
                    </h2>

                    
                    <p className="text-lg md:text-xl leading-relaxed">
                        Get your issue resolved quickly with access<br />
                        to first-class professionals that know how to help.
                    </p>

                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">

                        
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow transition">
                            Chat With US
                        </button>

                        
                        <a
                            href="tel:+18888128678"
                            className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition"
                        >
                            Call Us: 1-888-812-867
                        </a>

                    </div>

                </div>
            </div>


            

        </div>
    )
}
