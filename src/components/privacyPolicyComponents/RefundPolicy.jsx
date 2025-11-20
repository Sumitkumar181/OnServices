import React from 'react'

export default function RefundPolicy() {
  return (
      <div className="w-full">


          <div className="w-full bg-[#f1efef] pb-10 pt-26 px-6 flex flex-col justify-end items-center text-center min-h-[40vh]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="max-w-3xl text-black text-lg leading-relaxed mb-12">Home / Privacy Policy</p>
          </div>



          <div className="py-16 px-6 md:px-14 space-y-12">


              <section className="bg-white flex flex-col items-start space-y-4">
                  
                  <p className="max-w-4xl text-black text-base leading-relaxed">
                     At onService, we prioritize customer satisfaction and stand behind the quality of our computer repair and managed IT services. Our refund policy is designed to provide clarity and fairness to our valued clients while ensuring compliance with legal requirements.of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
                  </p>
              </section>



              <section className="bg-white flex flex-col items-start space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">One-Time Service Refunds</h2>
                  <p className="max-w-4xl text-black text-base leading-relaxed">For one-time problem resolutions and onsite services, we typically do not bill clients until after the services are rendered. In the event that a customer is billed in advance for onsite services, refunds are issued and available within 7 - 10 business days if the problem has not been resolved to the customer's satisfaction, and there is no other way to resolve the issue to a customer's satisfaction within 30 days of the initial purchase.</p>
                  <p className="max-w-4xl text-black text-base leading-relaxed">We understand that issues with computer systems can sometimes resurface after service. Therefore, if a problem recurs within 30 days of our initial service, customers are encouraged to contact us promptly. We will address the issue again under their 30-day service warranty at no additional charge. If the problem cannot be resolved within 30 days of the initial purchase, customers are issued a refund that should arrive at their bank in up to 10 business working days.</p>
              </section>



              <section className="bg-white flex flex-col items-start space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Monthly Maintenance and Subscription Plans</h2>
                  <p className="max-w-4xl text-black text-base leading-relaxed">For customers enrolled in our monthly maintenance packages, software and services are provided on a no-obligation, month-to-month billing cycle. Clients agree to this billing arrangement upon signing up for our services.</p>
                  <p className="max-w-4xl text-black text-base leading-relaxed">Cancellation of subscription plans is simple and hassle-free. Customers need only to call us to cancel their subscription, and upon doing so, they will no longer be billed for future billing cycles. However, refunds for previous billing cycles prior to the notice of cancellation are not available.</p>


              </section>

              <section className="bg-white flex flex-col items-start space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Important Considerations</h2>
                  

                  <ol className="list-disc pl-6 space-y-4 text-base text-black max-w-4xl">
                      <li className="font-semibold">Responsibility After Service: 
                          <p className="font-normal leading-relaxed mt-1">While we do our utmost to resolve all issues effectively, we cannot control the actions of users on their systems after our services have been provided. As such, we cannot be held responsible for issues arising from user actions following our service.</p>
                      </li>

                      <li className="font-semibold">Communication:
                          <p className="font-normal leading-relaxed mt-1">Clear communication is essential for effective service delivery and cancellation of subscriptions. Customers are encouraged to reach out to us with any concerns or requests for cancellation.</p>
                      </li>

                      
                  </ol>
              </section>
          </div>
      </div>
  )
}
