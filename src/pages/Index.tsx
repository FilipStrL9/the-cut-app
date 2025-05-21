
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BarberCard from "@/components/BarberCard";
import { Link } from "react-router-dom";
import { Scissors, Star, Clock } from "lucide-react";

const Index = () => {
  // Sample data
  const featuredServices = [
    {
      title: "Classic Haircut",
      description: "Our signature haircut service includes consultation, shampoo, cut, and style.",
      price: "$35",
      imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
    },
    {
      title: "Beard Trim",
      description: "Expert beard shaping and trimming to keep your facial hair looking its best.",
      price: "$25",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
    },
    {
      title: "Haircut & Beard Combo",
      description: "Get the complete look with our haircut and beard trim package.",
      price: "$50",
      imageUrl: "https://images.unsplash.com/photo-1593702288056-f282dfeb4008",
    }
  ];

  const featuredBarbers = [
    {
      name: "James Wilson",
      role: "Master Barber",
      bio: "With over 10 years of experience, James specializes in classic cuts with a modern twist.",
      imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
      specialties: ["Classic Cuts", "Fades", "Beard Design"]
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Barber",
      bio: "Michael brings creativity and precision to every haircut, with a focus on current trends.",
      imageUrl: "https://images.unsplash.com/photo-1618077360395-f3068be8e001",
      specialties: ["Modern Styles", "Textured Cuts", "Hair Design"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <Hero />
      
      {/* Features section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose <span className="text-barber-purple">The Sharp Cut</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-barber-purple/10 rounded-full flex items-center justify-center mb-4">
                <Scissors className="h-8 w-8 text-barber-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Barbers</h3>
              <p className="text-barber-neutral">Our team of skilled barbers bring years of experience and continuous training to deliver the perfect cut.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-barber-purple/10 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-barber-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Experience</h3>
              <p className="text-barber-neutral">Enjoy complimentary beverages, hot towel service, and a relaxing atmosphere during your visit.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-barber-purple/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-barber-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-barber-neutral">Book your appointment online in seconds and receive reminders before your scheduled time.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services section */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
              <p className="text-barber-neutral">Premium haircuts and grooming services for the modern gentleman</p>
            </div>
            <Link to="/services" className="btn-outline mt-4 md:mt-0">
              View All Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                price={service.price}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="gradient-bg section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Fresh Look?</h2>
            <p className="text-xl mb-8">Book your appointment today and experience the difference at The Sharp Cut.</p>
            <Link to="/book" className="btn-primary text-lg">
              Book Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Barbers section */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Barbers</h2>
              <p className="text-barber-neutral">Skilled professionals committed to exceptional service</p>
            </div>
            <Link to="/barbers" className="btn-outline mt-4 md:mt-0">
              View All Barbers
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBarbers.map((barber, index) => (
              <BarberCard
                key={index}
                name={barber.name}
                role={barber.role}
                bio={barber.bio}
                imageUrl={barber.imageUrl}
                specialties={barber.specialties}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">"The best haircut I've ever had. James took his time to understand what I wanted and delivered perfectly."</p>
              <p className="font-semibold">- Michael T.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">"Great atmosphere, friendly staff, and excellent service. My go-to place for haircuts and beard trims."</p>
              <p className="font-semibold">- David K.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">"The attention to detail is amazing. They really take pride in their work and it shows in every haircut."</p>
              <p className="font-semibold">- Robert J.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
