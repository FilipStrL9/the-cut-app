
import BookingForm from "@/components/BookingForm";

const Book = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-xl text-barber-neutral max-w-2xl mx-auto">
            Schedule your next visit to The Sharp Cut for a premium grooming experience
          </p>
        </div>
        
        <BookingForm />
      </div>
      
      <div className="container mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4">Walk-In Policy</h2>
            <p className="mb-4">
              While we recommend booking an appointment to ensure availability, we do accept walk-ins when possible. For the best experience, please call ahead to check current wait times.
            </p>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-barber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">(555) 123-4567</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
            <p>
              We understand that plans can change. If you need to cancel or reschedule your appointment, please let us know at least 24 hours in advance. Late cancellations or no-shows may be subject to a fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
