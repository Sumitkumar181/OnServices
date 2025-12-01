import React from 'react'
import business from "../../../assets/business-overview-dashboard.jpg"

export default function QuickBooksHero() {
  return (
      <div className="w-full bg-white text-black font-sans">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-20 px-6 gap-10">
              
              <div className="flex-1 space-y-6">

                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                      Welcome to <br /> QuickBooks Solutions Provider
                  </h1>

                  
                  <a
                      href="tel:+18888128678"
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition"
                  >
                      Call Toll-Free: (888) 812-8678
                  </a>

                  
                  <p className="text-lg leading-relaxed">
                      Discover the perfect accounting and bookkeeping software for your
                      business. Get started with a free demo and expert consultation from
                      our Intuit QuickBooks® Certified ProAdvisors. Take your business to
                      the next level with QuickBooks®!
                  </p>

              </div>



              
              <div className="flex-1 flex justify-center">
                  <img
                      src={business}
                      alt="Dashboard UI"
                      className="w-full max-w-lg"
                  />
              </div>
          </div>
      </div>
  )
}
