import { PhoneCall } from "lucide-react";
import bussiness from "../../assets/business-man.avif";
import imagepro2 from "../../assets/imagepro2.jpg";
import imagepro4 from "../../assets/imagepro4.jpg";
import imagepro3 from "../../assets/imagepro3.jpg";

const services = [
    {
        title: "Business Security",
        image: imagepro2,
        description:
            "4/7 threat hunting, monitoring, and proactive response to neutralize advanced threats before they cause significant damage."
    },
    {
        title: "Premium Security",
        image: imagepro3,
        description:
            "Robust protection for your network infrastructure and agile cloud environments, including continuous visibility and vulnerability management."
    },
    {
        title: "Ultimate Security",
        image: imagepro4,
        description:
            "Safeguarding your most vital information through enterprise-grade encryption for data both at rest and in transit, ensuring confidentiality."
    }
];

export default function VigiloraxHero() {
    return (
        <div>
            <div className="w-full pt-14">

                <div className="w-full bg-orange-500 text-white text-center py-3 font-semibold flex items-center justify-center gap-2">
                    <PhoneCall size={18} className="text-white" />
                    <a href="tel:+18888128678">Click to Call: 1-888-812-8678</a>
                </div>

                <div
                    className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${bussiness})` }}
                >
                    <div className="absolute inset-0 bg-black/80"></div>

                    <div className="relative z-10 text-white text-center px-4 max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-6">
                            Antivirus Customer Service
                        </h1>

                        <p className="text-lg md:text-xl mb-4">
                            Facing Issue with your Account?<br />
                            Contact Us Today!
                        </p>

                        <p className="text-lg md:text-xl mb-4">
                            Questions?{" "}
                            <a href="tel:+18888128678" className="text-orange-400 font-semibold">
                                1-888-812-8678
                            </a>
                        </p>

                        <p className="text-lg md:text-xl mb-8">
                            See it in the Security Center in Mobile and Online.
                        </p>

                        <p className="font-semibold text-orange-400 mb-4">
                            Need Any Help? Contact Us Now!
                        </p>

                        <a
                            href="tel:+18888128678"
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-lg transition"
                        >
                            <PhoneCall size={20} />
                            1-888-812-8678
                        </a>
                    </div>
                </div>

                {/* <a
                    href="tel:+18888128678"
                    className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition"
                >
                    <PhoneCall size={28} />
                </a> */}
            </div>

            <div className="w-full bg-[#f8f9fb] py-20 px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1a1a1a]">
                    Comprehensive Security Solutions
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto text-lg">
                    We provide a full spectrum of cybersecurity services tailored to protect your assets
                    and ensure business continuity.
                </p>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
                            <div className="w-full h-56 overflow-hidden rounded-lg">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-center text-[#1a1a1a]">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-center text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full bg-[#f8f9fb] py-20 px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1a1a1a]">
                    Take the First Step Towards Total Security
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto text-lg">
                    Reach out today for a complimentary, no-obligation consultation. Our dedicated cybersecurity experts are poised and ready to help safeguard your valuable business assets.
                </p>
            </div>

            <section className="w-full bg-white py-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

                    <div className="bg-white shadow-md rounded-xl p-6">
                        <form className="space-y-5">

                            <div>
                                <label className="text-sm text-gray-700">Full Name</label>
                                <input type="text" className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Company Name (Optional)</label>
                                <input type="text" className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Email Address</label>
                                <input type="email" className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">How can we help?</label>
                                <textarea rows="4" className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white shadow-2xl rounded-xl p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Details</h2>

                            <p className="text-sm mb-2"><strong>Address:</strong> 4000 N Central avenue, Suite 200, Phoenix, Arizona, 85012, USA</p>

                            <p className="text-sm mb-2">
                                <strong>Phone:</strong>{" "}
                                <a href="tel:+18888128678" className="text-blue-600 font-semibold">
                                    1-888-812-8678
                                </a>
                            </p>

                            <p className="text-sm mb-2"><strong>Email:</strong> info@vigilorax.it.com</p>

                            <p className="text-sm">
                                <strong>Business Hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM
                            </p>
                        </div>

                        <div className="w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6345236300243!2d-112.07403798479882!3d33.49252978075732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12cd33e9f585%3A0xeee398fb1e2f66b9!2s4000%20N%20Central%20Ave%20%23200%2C%20Phoenix%2C%20AZ%2085012!5e0!3m2!1sen!2sus!4v1691378759813!5m2!1sen!2sus"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
