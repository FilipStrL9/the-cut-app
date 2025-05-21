
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-barber to-barber/80">
        {/* Background image placeholder - in real app, use an actual image */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Precision Cuts For The Modern Gentleman
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Step into The Sharp Cut for a premium grooming experience. Our skilled barbers deliver precise cuts and impeccable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book" className="btn-primary text-center">
              Book an Appointment
            </Link>
            <Link to="/services" className="btn-outline bg-white/10 backdrop-blur-sm text-center">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
