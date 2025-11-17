


export default function HeroSection() {
    return (
        <section className="w-full bg-[#f2f4f7] flex flex-col justify-center min-h-screen py-4 sm:py-8 md:py-24 text-center px-4">


            <p className="text-sm md:text-base font-medium text-black">
                Managed IT Services Covering All 50 States
            </p>


           
            <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                World-Class <span className="text-blue-500">IT Services</span> for
                <br className="hidden md:block" /> Every Place You Get Things
                <br className="hidden md:block" /> Done.
            </h1>


            
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
                Responsive and ready when you need us.
            </p>


            
            <p className="mt-4 md:mt-6 max-w-2xl md:max-w-3xl mx-auto text-[#131313] text-base md:text-lg leading-relaxed px-2">
                Our managed IT services help empower home-based and office teams.
                <br className="hidden md:block" />
                Experience matters, and with thousands of service requests under our belts, we've probably seen it before.
            </p>


        </section>
    );
}

