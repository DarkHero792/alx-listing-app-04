interface PropertyDetailProps {
  property: {
    title: string;
    image: string;
    location: string;
    price: number;
    rating: number;
    reviews: number;
    description: string;
    amenities: string[];
  };
}

const PropertyDetail: React.FC<{ property: PropertyDetailProps["property"] }> = ({ property }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <img src={property.image} alt={property.title} className="w-full h-80 object-cover rounded-lg mb-6" />
      
      <p className="text-xl font-semibold mb-2">${property.price} / night</p>
      <p className="text-yellow-500">⭐ {property.rating} ({property.reviews} reviews)</p>
      
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{property.description}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
        <ul className="list-disc list-inside text-gray-700">
          {property.amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
