import React from 'react'
import blog from "../../assets/blog.jpg"
import { Link } from 'react-router-dom';

export default function BlogPage() {
    const cards = [
        {
            img: blog,
            title: "Why Every Pharmacy Needs A Customized ERP System Today",
            desc: "Tailored ERP streamlines pharma inventory, billing, HR, compliance.",
            path: "/blog/121"
        },
        {
            img: blog,
            title: "Maximizing Reach Through Targeted Digital Marketing Strategies",
            desc: "Pharmacies grow online with social media, SEO, content marketing.",
            path: "/blog/121"
        },
        {
            img: blog,
            title: "How Mobile Apps Are Transforming The Healthcare Retail Industry",
            desc: "Mobile apps simplify orders, boost loyalty, enhance user connection.",
            path: "/blog/121"
        },
        {
            img: blog,
            title: "How Mobile Apps Are Transforming The Healthcare Retail Industry",
            desc: "Mobile apps simplify orders, boost loyalty, enhance user connection.",
            path: "/blog/121"
        },
    ];
  return (
      <div>
         
              <div className="w-full bg-[#f1efef] pb-10 pt-26  px-6 flex flex-col justify-end items-center text-center min-h-[40vh]">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Blogs
                  </h1>


                  <p className="max-w-3xl text-black text-lg leading-relaxed mb-12">
                      Home / Blogs
                  </p>
          </div>
          <section className="w-full bg-white py-14 px-6 ">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  gap-10">

                  {cards.map((card, index) => (
                      <div
                          key={index}
                          className=" text-white rounded-lg overflow-hidden"
                      >
                        
                          <div className="w-full h-56 overflow-hidden">
                              <img
                                  src={card.img}
                                  alt=""
                                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                              />
                          </div>

                         
                          <div className="mt-4 space-y-3">
                              <h3 className="text-lg font-semibold text-black leading-snug">
                                  {card.title}
                              </h3>

                              <p className="text-gray-700 text-sm leading-relaxed">
                                  {card.desc}
                              </p>

                              <Link
                                  to={card.path}
                                  className="inline-flex items-center text-base text-black font-medium mt-2 hover:underline"
                              >
                                  Read More
                                  <span className="ml-1 text-lg">›</span>
                              </Link>
                          </div>
                      </div>
                  ))}

              </div>
          </section>

    </div>
  )
}
