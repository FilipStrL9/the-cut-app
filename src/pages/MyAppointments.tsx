
import { useState } from "react";
import { format } from "date-fns";
import { Scissors, Calendar, Clock, Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";

// Mock data for appointments
const mockAppointments = [
  {
    id: "apt1",
    date: new Date(Date.now() + 86400000 * 3), // 3 days from now
    time: "10:00 AM",
    service: "Classic Haircut",
    barber: "John Smith",
    status: "upcoming",
  },
  {
    id: "apt2",
    date: new Date(Date.now() + 86400000 * 7), // 7 days from now
    time: "2:30 PM",
    service: "Beard Trim",
    barber: "Michael Johnson",
    status: "upcoming",
  },
  {
    id: "apt3",
    date: new Date(Date.now() - 86400000 * 10), // 10 days ago
    time: "11:15 AM",
    service: "Hot Towel Shave",
    barber: "David Williams",
    status: "completed",
  },
  {
    id: "apt4",
    date: new Date(Date.now() - 86400000 * 21), // 21 days ago
    time: "3:00 PM",
    service: "Full Service",
    barber: "Robert Brown",
    status: "completed",
  },
];

const MyAppointments = () => {
  const [appointments] = useState(mockAppointments);
  
  const upcomingAppointments = appointments.filter(
    (apt) => apt.status === "upcoming"
  );
  
  const pastAppointments = appointments.filter(
    (apt) => apt.status === "completed"
  );

  const handleCancel = (id: string) => {
    toast.info("This is a mock feature. In a real app, this would cancel your appointment.");
  };

  const handleReschedule = (id: string) => {
    toast.info("This is a mock feature. In a real app, this would let you reschedule your appointment.");
  };

  const AppointmentCard = ({ appointment }: { appointment: typeof mockAppointments[0] }) => (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{appointment.service}</CardTitle>
          {appointment.status === "upcoming" ? (
            <Badge className="bg-barber-purple">Upcoming</Badge>
          ) : (
            <Badge variant="outline" className="text-gray-500 border-gray-300">Completed</Badge>
          )}
        </div>
        <CardDescription>with {appointment.barber}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-4 w-4 text-barber-purple" />
          <span>{format(appointment.date, "EEEE, MMMM d, yyyy")}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Clock className="h-4 w-4 text-barber-purple" />
          <span>{appointment.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Scissors className="h-4 w-4 text-barber-purple" />
          <span>{appointment.service}</span>
        </div>
      </CardContent>
      {appointment.status === "upcoming" && (
        <CardFooter className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={() => handleReschedule(appointment.id)}
          >
            Reschedule
          </Button>
          <Button 
            variant="destructive" 
            className="flex-1" 
            onClick={() => handleCancel(appointment.id)}
          >
            Cancel
          </Button>
        </CardFooter>
      )}
    </Card>
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Appointments</h1>
          <p className="text-xl text-barber-neutral max-w-2xl mx-auto">
            View and manage your upcoming and past appointments
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming" className="text-sm md:text-base">
                Upcoming ({upcomingAppointments.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="text-sm md:text-base">
                Past ({pastAppointments.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <Calendar className="h-8 w-8 text-barber-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Upcoming Appointments</h3>
                  <p className="text-barber-neutral mb-6">
                    You don't have any upcoming appointments scheduled.
                  </p>
                  <Button asChild>
                    <a href="/book">Book an Appointment</a>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {pastAppointments.length > 0 ? (
                pastAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <Clock className="h-8 w-8 text-barber-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Past Appointments</h3>
                  <p className="text-barber-neutral mb-6">
                    You don't have any past appointment history yet.
                  </p>
                  <Button asChild>
                    <a href="/book">Book Your First Appointment</a>
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-barber-neutral mb-2">
            Need to make changes to your appointment?
          </p>
          <p className="text-sm mb-4">
            Call us at <span className="font-medium">(555) 123-4567</span> or use the buttons above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
