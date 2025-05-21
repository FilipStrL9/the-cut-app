
import { useState } from "react";
import { GalleryHorizontal } from "lucide-react";
import ImageOptimizer from "./ImageOptimizer";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = ["all", "haircuts", "beards", "shop"];
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1622296089863-4288efc8f358",
      alt: "Man with short haircut",
      category: "haircuts"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1593702288056-f282dfeb4008",
      alt: "Beard trimming",
      category: "beards"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1585747860715-2ba37e752b3d",
      alt: "Barbershop interior",
      category: "shop"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
      alt: "Classic haircut",
      category: "haircuts"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
      alt: "Beard grooming",
      category: "beards"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
      alt: "Barbershop tools",
      category: "shop"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
      alt: "Haircut in progress",
      category: "haircuts"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186",
      alt: "Barber chair",
      category: "shop"
    }
  ];
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div>
      <div className="flex items-center justify-center mb-8 overflow-x-auto py-2 sm:overflow-visible">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-barber-purple text-white"
                  : "text-gray-600 hover:text-barber-purple"
              }`}
              aria-pressed={activeCategory === category}
              aria-label={`Filter by ${category}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" role="list" aria-label="Gallery images">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="relative overflow-hidden rounded-lg aspect-square group"
            role="listitem"
          >
            <ImageOptimizer
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-barber/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <p className="font-medium">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredImages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <GalleryHorizontal className="w-12 h-12 text-gray-400 mb-4" aria-hidden="true" />
          <h3 className="text-xl font-medium text-gray-500">No images found</h3>
          <p className="text-gray-400">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
