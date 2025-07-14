import React, { useState } from "react";
import Pill from "./ui/Pill";

const filterOptions = [
  "Top Villa",
  "Self Checkin",
  "Countryside",
  "Modern Loft",
  "Lake View",
  "Private Pool",
  "Pet Friendly",
];

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="flex gap-3 overflow-x-auto py-4 px-4 bg-gray-50 border-b">
      {filterOptions.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          active={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterSection;
