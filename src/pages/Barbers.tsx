
import BarberCard from "@/components/BarberCard";

const Barbers = () => {
  const allBarbers = [
    {
      name: "James Wilson",
      role: "Master Barber",
      bio: "With over 10 years of experience, James specializes in classic cuts with a modern twist. His attention to detail and precision make him a favorite among our regular clients.",
      imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
      specialties: ["Classic Cuts", "Fades", "Beard Design"]
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Barber",
      bio: "Michael brings creativity and precision to every haircut, with a focus on current trends. His knowledge of hair textures and styles ensures you'll leave looking your best.",
      imageUrl: "https://images.unsplash.com/photo-1618077360395-f3068be8e001",
      specialties: ["Modern Styles", "Textured Cuts", "Hair Design"]
    },
    {
      name: "David Thompson",
      role: "Senior Barber",
      bio: "David is known for his meticulous attention to detail and personalized approach. He takes the time to understand each client's needs and delivers exceptional results.",
      imageUrl: "https://images.unsplash.com/photo-1603775020644-eb8decd79994",
      specialties: ["Precision Cuts", "Hot Towel Shaves", "Grey Blending"]
    },
    {
      name: "Robert Anderson",
      role: "Barber",
      bio: "Robert specializes in classic barbering techniques with a contemporary flair. His friendly demeanor and skilled hands make every visit enjoyable.",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      specialties: ["Traditional Cuts", "Beard Trims", "Skin Fades"]
    },
    {
      name: "Christopher Martinez",
      role: "Barber",
      bio: "Christopher is passionate about creating tailored looks that enhance each client's individual style. He's especially skilled with textured hair and modern techniques.",
      imageUrl: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4",
      specialties: ["Curly Hair", "Styling", "Modern Techniques"]
    },
    {
      name: "William Johnson",
      role: "Apprentice Barber",
      bio: "The newest addition to our team, William brings fresh perspectives and enthusiasm. Under the mentorship of our senior barbers, he's developing exceptional skills.",
      imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      specialties: ["Contemporary Cuts", "Fades", "Client Care"]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Barbers</h1>
          <p className="text-xl text-barber-neutral max-w-2xl mx-auto">
            Meet our team of skilled professionals committed to making you look your best
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBarbers.map((barber, index) => (
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
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Join Our Team</h2>
          <p className="text-center mb-6 max-w-2xl mx-auto">
            The Sharp Cut is always looking for talented barbers to join our team. If you're passionate about barbering and providing exceptional client experiences, we'd love to hear from you.
          </p>
          <div className="text-center">
            <button className="btn-outline">View Career Opportunities</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barbers;
