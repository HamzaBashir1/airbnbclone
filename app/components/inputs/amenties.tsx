"use client";
import { FC } from "react";
import { IconType } from "react-icons";
import { FaWifi, FaUtensils, FaTv, FaTshirt, FaDog, FaDoorClosed, FaParking, FaCar, FaSnowflake, FaBriefcase, FaSwimmingPool, FaHotTub, FaHamburger, FaFire, FaFireExtinguisher, FaDumbbell, FaWater, FaUmbrellaBeach, FaShower, FaFirstAid, FaBell } from "react-icons/fa";
import CategoryInput from "./CategoryInput"; // Ensure the path is correct

interface AmenitiesSectionProps {
  selectedAmenities: string[];
  onSelect: (amenity: string) => void;
}

const AmenitiesSection: FC<AmenitiesSectionProps> = ({ selectedAmenities, onSelect }) => {
  const amenities = [
    { label: "Wi-Fi", icon: FaWifi },
    { label: "Kitchen", icon: FaUtensils },
    { label: "TV", icon: FaTv },
    { label: "Washer", icon: FaTshirt },
    { label: "Pet-friendly", icon: FaDog },
    { label: "Air conditioning", icon: FaSnowflake },
    { label: "Free parking", icon: FaParking },
    { label: "Pool", icon: FaSwimmingPool },
    { label: "Hot tub", icon: FaHotTub },
    { label: "Gym", icon: FaDumbbell },
    { label: "Fireplace", icon: FaFire },
    { label: "Hair dryer", icon: FaHamburger },
    { label: "Iron", icon: FaFireExtinguisher },
    { label: "Beachfront", icon: FaUmbrellaBeach },
    { label: "Shampoo", icon: FaShower },
    { label: "First aid kit", icon: FaFirstAid },
    { label: "Hangers", icon: FaBell },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
      {amenities.map((amenity) => (
        <CategoryInput
          key={amenity.label}
          label={amenity.label}
          icon={amenity.icon}
          selected={selectedAmenities.includes(amenity.label)}
          onClick={() => onSelect(amenity.label)}
        />
      ))}
    </div>
  );
};

export default AmenitiesSection;
