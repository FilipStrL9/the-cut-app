
import { FC } from 'react';

interface BarberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specialties?: string[];
}

const BarberCard: FC<BarberCardProps> = ({ 
  name, 
  role, 
  bio, 
  imageUrl, 
  specialties = []
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="h-72 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-barber mb-1">{name}</h3>
        <p className="text-barber-purple font-medium mb-3">{role}</p>
        <p className="text-barber-neutral mb-4 line-clamp-3">{bio}</p>
        
        {specialties.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-barber mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="text-xs bg-barber-light/30 text-barber-purple px-3 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button className="w-full btn-outline">Book with {name.split(' ')[0]}</button>
      </div>
    </div>
  );
};

export default BarberCard;
