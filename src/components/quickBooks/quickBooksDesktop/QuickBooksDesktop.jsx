import React from 'react'
import deskpreplus from "../../../assets/desk-preplus.png"
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
                                href="tel:18888305278"
                                className="px-8 py-4 bg-[#0ca573] rounded-full text-white font-semibold text-lg shadow-lg hover:bg-[#0f8860] transition"
                            >
                                Call Us At: 1-888-830-5278
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

        </div>
    )
}
