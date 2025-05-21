
import { useState } from 'react';
import { Calendar, Clock, Scissors, User } from 'lucide-react';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const services = [
    "Classic Haircut",
    "Beard Trim",
    "Hot Towel Shave",
    "Haircut & Beard Combo",
    "Head Shave",
    "Hair & Scalp Treatment"
  ];

  const barbers = [
    "James Wilson",
    "Michael Rodriguez",
    "David Thompson",
    "Robert Anderson"
  ];

  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "1:00 PM", "2:00 PM", 
    "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the form data to a backend API
    console.log("Booking submitted:", formData);
    alert("Thank you! Your appointment has been scheduled.");
    // Reset form
    setFormData({
      service: '',
      barber: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: '',
    });
    setStep(1);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex-1 ${step >= 1 ? 'text-barber-purple' : 'text-gray-400'}`}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-barber-purple' : 'bg-gray-200'} text-white mb-2`}>
                <Scissors className="w-4 h-4" />
              </div>
              <div className="ml-2 text-sm font-medium">Service</div>
            </div>
          </div>
          <div className="w-12 h-1 bg-gray-200">
            <div className={`h-full ${step >= 2 ? 'bg-barber-purple' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex-1 ${step >= 2 ? 'text-barber-purple' : 'text-gray-400'}`}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-barber-purple' : 'bg-gray-200'} text-white mb-2`}>
                <Calendar className="w-4 h-4" />
              </div>
              <div className="ml-2 text-sm font-medium">Date & Time</div>
            </div>
          </div>
          <div className="w-12 h-1 bg-gray-200">
            <div className={`h-full ${step >= 3 ? 'bg-barber-purple' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex-1 ${step >= 3 ? 'text-barber-purple' : 'text-gray-400'}`}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-barber-purple' : 'bg-gray-200'} text-white mb-2`}>
                <User className="w-4 h-4" />
              </div>
              <div className="ml-2 text-sm font-medium">Your Info</div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <label className="block text-sm font-medium text-barber mb-2">Select Service</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div 
                    key={service}
                    className={`
                      border rounded-lg p-4 cursor-pointer transition-all hover:border-barber-purple
                      ${formData.service === service ? 'border-barber-purple bg-barber-light/10' : 'border-gray-200'}
                    `}
                    onClick={() => setFormData(prev => ({ ...prev, service }))}
                  >
                    <p className="font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-barber mb-2">Select Barber</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {barbers.map((barber) => (
                  <div 
                    key={barber}
                    className={`
                      border rounded-lg p-4 cursor-pointer transition-all hover:border-barber-purple
                      ${formData.barber === barber ? 'border-barber-purple bg-barber-light/10' : 'border-gray-200'}
                    `}
                    onClick={() => setFormData(prev => ({ ...prev, barber }))}
                  >
                    <p className="font-medium">{barber}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="button" 
                className="btn-primary"
                onClick={nextStep}
                disabled={!formData.service || !formData.barber}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-barber mb-2">
                Select Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-barber mb-2">
                Available Times
              </label>
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <div 
                    key={time}
                    className={`
                      border rounded-lg p-3 cursor-pointer text-center transition-all hover:border-barber-purple
                      ${formData.time === time ? 'border-barber-purple bg-barber-light/10' : 'border-gray-200'}
                    `}
                    onClick={() => setFormData(prev => ({ ...prev, time }))}
                  >
                    <p className="text-sm font-medium">{time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                type="button" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors"
                onClick={prevStep}
              >
                Back
              </button>
              <button 
                type="button" 
                className="btn-primary"
                onClick={nextStep}
                disabled={!formData.date || !formData.time}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-barber mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-barber mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-barber mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-barber mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                  placeholder="Any special requests or notes for your barber"
                  rows={3}
                ></textarea>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-barber mb-2">Appointment Summary</h4>
              <div className="text-sm space-y-1">
                <p><span className="text-barber-neutral">Service:</span> {formData.service}</p>
                <p><span className="text-barber-neutral">Barber:</span> {formData.barber}</p>
                <p><span className="text-barber-neutral">Date:</span> {formData.date}</p>
                <p><span className="text-barber-neutral">Time:</span> {formData.time}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                type="button" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors"
                onClick={prevStep}
              >
                Back
              </button>
              <button 
                type="submit" 
                className="btn-primary"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
