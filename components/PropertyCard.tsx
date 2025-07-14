import React from "react";
import Image from "next/image";

interface PropertyCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ name, image, price, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full h-56">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-sm text-gray-600">Price: ${price}/night</p>
        <p className="text-sm text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
