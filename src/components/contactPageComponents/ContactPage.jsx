import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react';

export default function ContactPage() {

  const [openIndex, setOpenIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");


    try {
      await axios.post("http://localhost:3000/", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
    }
  };


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
      <div>
          <div className="w-full bg-[#f1efef] pb-10 pt-26  px-6 flex flex-col justify-end items-center text-center min-h-[40vh]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                 Contact Us
              </h2>


              <p className="max-w-3xl text-black text-lg leading-relaxed mb-12">
                  Home / Contact Us
              </p>
      </div>
      

      <div className="w-full bg-[#4D8DFE] py-16 px-4 flex justify-center">
        <div className="bg-[#4D8DFE]  p-6 md:p-12 max-w-7xl w-full text-center ">


          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            Need an Incident Resolved? Let's Talk!
          </h2>


          <p className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
            The fastest way to get help is to give us a call. Our expert team is ready to discuss your IT needs and provide immediate guidance.
          </p>


          <a
            href="tel:+18888128678"
            className="bg-white text-blue-600 font-semibold py-3 px-6 sm:px-8 rounded-full shadow-md 
                                hover:shadow-lg transition text-sm sm:text-base inline-block"
          >
            Call (888) 812-8678 Now
          </a>
          <p className="text-white text-xs sm:text-sm max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed px-2">
            Available during business hours • Fast response times
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4 flex flex-col text-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-snug">
          Or Send Us a Message
        </h2>


        <p className="text-black text-base sm:text-lg max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
          Prefer email? Fill out the form below and one of our specialists will get back to you within the day.
        </p>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mt-10 w-full"
          onSubmit={handleSubmit}
        >
          {[
            "Name",
            "Email",
            "Phone",
            "Company",
            "Message",
          ].map((field) =>
            field.toLowerCase() === "message" ? (
              <div
                key={field}
                className="col-span-1 sm:col-span-2 flex flex-col text-left"
              >
                <label className="font-medium font-[Stack Sans Notch] text-gray-800 mb-2">
                  Message <span className="text-[#1398c8]">*</span>
                </label>


                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="border-b border-gray-400 focus:border-[#1398c8] outline-none py-2 transition-all resize-none"
                ></textarea>
              </div>
            ) : (
              <div key={field} className="flex flex-col text-left">
                <label className="font-medium font-[Stack Sans Notch] text-gray-800 mb-2">
                  {field}{" "}
                  {field.toLowerCase() === "company" ? (
                    <span className="text-[#c4c6c7] font-normal">(Optional)</span>
                  ) : (
                    <span className="text-[#1398c8] font-normal">*</span>
                  )}
                </label>


                <input
                  type={field.toLowerCase() === "email" ? "email" : "text"}
                  name={field.toLowerCase()}
                  value={formData[field.toLowerCase()]}
                  onChange={handleChange}
                  required={field.toLowerCase() !== "company"}
                  className="border-b border-gray-400 focus:border-[#1398c8] outline-none py-2 transition-all"
                />
              </div>
            )
          )}


          <div className="col-span-1 sm:col-span-2 flex justify-center mt-10">
            <button
              type="submit"
              className="relative w-32 h-32 sm:w-40 sm:h-40 border border-gray-400 rounded-full flex flex-col items-center justify-center text-gray-700 font-medium hover:bg-[#1398c8] hover:text-white transition-colors duration-300"
            >
              <span>Send</span>
              <span className="flex items-center gap-1">Messages</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
