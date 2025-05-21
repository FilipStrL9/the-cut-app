
import { useState, useEffect } from 'react';
import { Calendar, Clock, Scissors, User } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { formatDate, formatDisplayDate, getAvailableDates, parseDate } from '@/utils/date-utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { bookingFormSchema, type BookingFormValues } from '@/schemas/booking-schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AccessibilityWrapper } from '@/components/AccessibilityWrapper';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

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

  const defaultAvailableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "1:00 PM", "2:00 PM", 
    "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      service: '',
      barber: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: '',
    },
  });

  // Load available dates when component mounts
  useEffect(() => {
    // Get the next 14 days as available dates
    const dates = getAvailableDates(14);
    setAvailableDates(dates);
  }, []);

  // Reset available times when date changes
  useEffect(() => {
    const selectedDate = form.watch('date');
    if (selectedDate) {
      setLoading(true);
      // In a real app, this would be a Firebase query to get available times
      // Simulating API call with setTimeout
      setTimeout(() => {
        // For demo purposes, we're just using the default times
        // In a real app, you'd filter out already booked times
        setAvailableTimes(defaultAvailableTimes);
        setLoading(false);
      }, 500);
    }
  }, [form.watch('date')]);

  const onSubmit = (data: BookingFormValues) => {
    setLoading(true);
    
    // In a real app, we would submit the form data to Firebase
    // Simulating API call with setTimeout
    setTimeout(() => {
      console.log("Booking submitted:", data);
      toast.success("Your appointment has been scheduled!");
      
      // Reset form
      form.reset();
      setStep(1);
      setLoading(false);
    }, 1000);
  };

  const nextStep = () => {
    // For step 1, validate service and barber
    if (step === 1) {
      const service = form.getValues('service');
      const barber = form.getValues('barber');
      
      if (!service || !barber) {
        form.trigger(['service', 'barber']);
        return;
      }
    }
    
    // For step 2, validate date and time
    if (step === 2) {
      const date = form.getValues('date');
      const time = form.getValues('time');
      
      if (!date || !time) {
        form.trigger(['date', 'time']);
        return;
      }
    }
    
    setStep(step + 1);
  };
  
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex-1 ${step >= 1 ? 'text-barber-purple' : 'text-gray-400'}`}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-barber-purple' : 'bg-gray-200'} text-white mb-2`}>
                <Scissors className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="ml-2 text-sm font-medium">Service</div>
            </div>
          </div>
          <div className="w-12 h-1 bg-gray-200 hidden sm:block">
            <div className={`h-full ${step >= 2 ? 'bg-barber-purple' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex-1 ${step >= 2 ? 'text-barber-purple' : 'text-gray-400'}`}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-barber-purple' : 'bg-gray-200'} text-white mb-2`}>
                <Calendar className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="ml-2 text-sm font-medium">Date & Time</div>
            </div>
          </div>
          <div className="w-12 h-1 bg-gray-200 hidden sm:block">
            <div className={`h-full ${step >= 3 ? 'bg-barber-purple' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`flex-1 ${step >= 3 ? 'text-barber-purple' : 'text-gray-400'}`}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-barber-purple' : 'bg-gray-200'} text-white mb-2`}>
                <User className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="ml-2 text-sm font-medium">Your Info</div>
            </div>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-6">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium text-barber mb-2">Select Service</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="radiogroup" aria-label="Services">
                      {services.map((service) => (
                        <div 
                          key={service}
                          className={`
                            border rounded-lg p-4 cursor-pointer transition-all hover:border-barber-purple
                            ${field.value === service ? 'border-barber-purple bg-barber-light/10' : 'border-gray-200'}
                          `}
                          onClick={() => form.setValue('service', service, { shouldValidate: true })}
                          role="radio"
                          aria-checked={field.value === service}
                          tabIndex={field.value === service ? 0 : -1}
                        >
                          <p className="font-medium">{service}</p>
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="barber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium text-barber mb-2">Select Barber</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="radiogroup" aria-label="Barbers">
                      {barbers.map((barber) => (
                        <div 
                          key={barber}
                          className={`
                            border rounded-lg p-4 cursor-pointer transition-all hover:border-barber-purple
                            ${field.value === barber ? 'border-barber-purple bg-barber-light/10' : 'border-gray-200'}
                          `}
                          onClick={() => form.setValue('barber', barber, { shouldValidate: true })}
                          role="radio"
                          aria-checked={field.value === barber}
                          tabIndex={field.value === barber ? 0 : -1}
                        >
                          <p className="font-medium">{barber}</p>
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="btn-primary"
                  onClick={nextStep}
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? 'Loading...' : 'Continue'}
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="date" className="block text-sm font-medium text-barber mb-2">
                      Select Date
                    </FormLabel>
                    <FormControl>
                      <select
                        id="date"
                        {...field}
                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                        required
                        aria-required="true"
                      >
                        <option value="">Select a date</option>
                        {availableDates.map((date) => (
                          <option key={formatDate(date)} value={formatDate(date)}>
                            {formatDisplayDate(date)}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium text-barber mb-2">
                      Available Times
                    </FormLabel>
                    {loading ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="border rounded-lg p-3 bg-gray-100 animate-pulse h-10"></div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" role="radiogroup" aria-label="Available times">
                        {availableTimes.map((time) => (
                          <div 
                            key={time}
                            className={`
                              border rounded-lg p-3 cursor-pointer text-center transition-all hover:border-barber-purple
                              ${field.value === time ? 'border-barber-purple bg-barber-light/10' : 'border-gray-200'}
                            `}
                            onClick={() => form.setValue('time', time, { shouldValidate: true })}
                            role="radio"
                            aria-checked={field.value === time}
                            tabIndex={field.value === time ? 0 : -1}
                          >
                            <p className="text-sm font-medium">{time}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <button 
                  type="button" 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors"
                  onClick={prevStep}
                  disabled={loading}
                >
                  Back
                </button>
                <button 
                  type="button" 
                  className="btn-primary"
                  onClick={nextStep}
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? 'Loading...' : 'Continue'}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name" className="block text-sm font-medium text-barber mb-2">
                        Your Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          {...field}
                          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                          placeholder="Enter your full name"
                          required
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email" className="block text-sm font-medium text-barber mb-2">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          id="email"
                          {...field}
                          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                          placeholder="your@email.com"
                          required
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="phone" className="block text-sm font-medium text-barber mb-2">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          id="phone"
                          {...field}
                          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                          placeholder="(123) 456-7890"
                          required
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="notes" className="block text-sm font-medium text-barber mb-2">
                        Special Requests (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="notes"
                          {...field}
                          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-barber-purple"
                          placeholder="Any special requests or notes for your barber"
                          rows={3}
                          aria-required="false"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <AccessibilityWrapper ariaLabel="Appointment Summary" className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-barber mb-2">Appointment Summary</h4>
                <div className="text-sm space-y-1">
                  <p><span className="text-barber-neutral">Service:</span> {form.getValues('service')}</p>
                  <p><span className="text-barber-neutral">Barber:</span> {form.getValues('barber')}</p>
                  <p><span className="text-barber-neutral">Date:</span> {form.getValues('date') ? formatDisplayDate(parseDate(form.getValues('date'))) : ''}</p>
                  <p><span className="text-barber-neutral">Time:</span> {form.getValues('time')}</p>
                </div>
              </AccessibilityWrapper>

              <div className="flex justify-between">
                <button 
                  type="button" 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors"
                  onClick={prevStep}
                  disabled={loading}
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? 'Processing...' : 'Confirm Booking'}
                </button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
