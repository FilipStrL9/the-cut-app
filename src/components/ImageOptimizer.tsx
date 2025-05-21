
import { useState } from "react";

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

// Helper function to check if WebP is supported
const supportsWebP = (): boolean => {
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    // WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

// Convert image URL to WebP if possible
const getOptimizedImageUrl = (url: string): string => {
  // If WebP is supported and the URL is from Unsplash, add WebP format
  if (supportsWebP() && url.includes('unsplash.com')) {
    return `${url}&fm=webp&q=80`;
  }
  return url;
};

const ImageOptimizer = ({ src, alt, className = "", width, height }: ImageOptimizerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const optimizedSrc = getOptimizedImageUrl(src);
  
  return (
    <>
      {!isLoaded && !hasError && (
        <div 
          className={`${className} bg-gray-200 animate-pulse`}
          style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
          aria-hidden="true"
        />
      )}
      
      <img
        src={optimizedSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
      />
    </>
  );
};

export default ImageOptimizer;
