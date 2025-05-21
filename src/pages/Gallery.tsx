
import Gallery from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-barber-neutral max-w-2xl mx-auto">
            Browse through our collection of haircuts, beard styles, and shop images
          </p>
        </div>
        
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
