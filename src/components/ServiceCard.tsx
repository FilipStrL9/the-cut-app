
import { FC } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration?: string;
  imageUrl?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ 
  title, 
  description, 
  price, 
  duration = '30 min',
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-barber">{title}</h3>
          <div className="text-barber-purple font-semibold">{price}</div>
        </div>
        <p className="text-barber-neutral mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-barber-neutral">{duration}</span>
          <button className="text-sm text-barber-purple font-medium hover:underline">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
