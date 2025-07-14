import React from "react";
import Layout from "../components/layout/Layout";
import { IMAGES, PROPERTYLISTINGSAMPLE } from "../constants"; // Import sample listings
import FilterSection from "../components/FilterSection";
import PropertyCard from "../components/PropertyCard"; // Import the card component

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4 text-center"
        style={{
          backgroundImage: `url(${IMAGES.hero.src})`,
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <FilterSection />

      {/* Listing Section */}
      <section className="py-10 px-4 md:px-10 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Available Listings</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard
              key={index}
              name={property.name}
              image={property.image}
              price={property.price}
              rating={property.rating}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
