
import React from 'react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
  iconType?: 'scissor' | 'barber' | 'chair' | 'razor';
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 300,
  height = 200,
  text = 'Image',
  className = '',
  iconType = 'scissor'
}) => {
  const getIcon = () => {
    switch (iconType) {
      case 'scissor':
        return (
          <path
            d="M14.5 5.5L6 14M14.5 14L6 5.5M4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7ZM4.5 18C5.88071 18 7 16.8807 7 15.5C7 14.1193 5.88071 13 4.5 13C3.11929 13 2 14.1193 2 15.5C2 16.8807 3.11929 18 4.5 18Z"
            stroke="#9b87f5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'barber':
        return (
          <path
            d="M7 21L7 11M17 21V11M12 21V11M22 6L2 6M20 3C20 4.65685 18.6569 6 17 6L7 6C5.34315 6 4 4.65685 4 3M18 11C18 9.34315 16.6569 8 15 8L9 8C7.34315 8 6 9.34315 6 11"
            stroke="#9b87f5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'chair':
        return (
          <path
            d="M6 20L4 14M18 20L20 14M4 14H20M4 14L2 7C2 7 2 5 5 5C8 5 8 7 8 7M20 14L22 7C22 7 22 5 19 5C16 5 16 7 16 7M8 7L9 3H15L16 7M8 7H16"
            stroke="#9b87f5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'razor':
        return (
          <path
            d="M7 21H17M12 21V13M12 13C14.2091 13 16 11.2091 16 9V3H8V9C8 11.2091 9.79086 13 12 13Z"
            stroke="#9b87f5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      default:
        return (
          <path
            d="M14.5 5.5L6 14M14.5 14L6 5.5M4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7ZM4.5 18C5.88071 18 7 16.8807 7 15.5C7 14.1193 5.88071 13 4.5 13C3.11929 13 2 14.1193 2 15.5C2 16.8807 3.11929 18 4.5 18Z"
            stroke="#9b87f5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
    }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={`bg-gray-100 rounded ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${text} placeholder`}
    >
      <rect width="100%" height="100%" fill="#f8f9fa" />
      <g transform="translate(12,12) scale(0.8)">
        {getIcon()}
      </g>
      <text
        x="50%"
        y="70%"
        fontSize="3"
        textAnchor="middle"
        fill="#9b87f5"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
      >
        {text}
      </text>
    </svg>
  );
};

export default PlaceholderImage;
