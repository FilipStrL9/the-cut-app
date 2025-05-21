
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const allServices = [
    {
      title: "Classic Haircut",
      description: "Our signature haircut service includes consultation, shampoo, cut, and style.",
      price: "$35",
      duration: "45 min",
      imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
    },
    {
      title: "Beard Trim",
      description: "Expert beard shaping and trimming to keep your facial hair looking its best.",
      price: "$25",
      duration: "30 min",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
    },
    {
      title: "Haircut & Beard Combo",
      description: "Get the complete look with our haircut and beard trim package.",
      price: "$50",
      duration: "1 hour",
      imageUrl: "https://images.unsplash.com/photo-1593702288056-f282dfeb4008",
    },
    {
      title: "Hot Towel Shave",
      description: "Experience our luxurious hot towel shave for the smoothest finish.",
      price: "$35",
      duration: "45 min",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
    },
    {
      title: "Head Shave",
      description: "Clean, precise head shave with straight razor finish and hot towel treatment.",
      price: "$30",
      duration: "30 min",
      imageUrl: "https://images.unsplash.com/photo-1622296089863-4288efc8f358",
    },
    {
      title: "Hair & Scalp Treatment",
      description: "Rejuvenating treatment for dry scalp and damaged hair.",
      price: "$40",
      duration: "45 min",
      imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e752b3d",
    },
    {
      title: "Kid's Haircut",
      description: "Haircut service for children under 12 years old.",
      price: "$25",
      duration: "30 min",
      imageUrl: "https://images.unsplash.com/photo-1559599746-c57a3531dd74",
    },
    {
      title: "Grey Coverage",
      description: "Natural-looking grey blending treatment for a more youthful appearance.",
      price: "$45",
      duration: "1 hour",
      imageUrl: "https://images.unsplash.com/photo-1617896848219-5564a9b3d997",
    },
    {
      title: "Luxury Face & Scalp Massage",
      description: "Relaxing massage to relieve tension and promote circulation.",
      price: "$30",
      duration: "30 min",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-barber-neutral max-w-2xl mx-auto">
            Choose from our range of premium grooming services designed to keep you looking sharp
          </p>
        </div>
        
        {/* Premium packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Premium Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-barber-purple">
              <div className="p-6 bg-barber-purple text-white text-center">
                <h3 className="text-xl font-bold mb-2">The Classic</h3>
                <p className="text-2xl font-semibold">$55</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Classic Haircut</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hot Towel Treatment</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Styling</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="w-full btn-primary">Book Package</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-barber-purple transform scale-105">
              <div className="p-6 bg-barber text-white text-center relative">
                <div className="absolute top-0 right-0 bg-barber-purple text-white text-xs py-1 px-3 rounded-bl">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">The Executive</h3>
                <p className="text-2xl font-semibold">$85</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium Haircut</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Beard Trim</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hot Towel Treatment</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Face Massage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium Styling</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="w-full btn-primary">Book Package</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-barber-purple">
              <div className="p-6 bg-barber-purple text-white text-center">
                <h3 className="text-xl font-bold mb-2">The Luxury</h3>
                <p className="text-2xl font-semibold">$120</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium Haircut</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hot Towel Shave</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scalp & Face Massage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Grey Coverage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium Styling Products</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="w-full btn-primary">Book Package</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-8">Individual Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
