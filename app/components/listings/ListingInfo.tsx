import useCountries from "@/app/hooks/useCountries"
import { SafeUser } from "@/app/types"
import { FC } from "react"
import { IconType } from "react-icons"
import {
  FaWifi, FaUtensils, FaTv, FaTshirt, FaDog, FaSnowflake, FaParking,
  FaSwimmingPool, FaHotTub, FaDumbbell, FaFire, FaHamburger, FaFireExtinguisher,
  FaUmbrellaBeach, FaShower, FaFirstAid, FaBell
} from "react-icons/fa"
import Avatar from "../Avatar"
import ListingCategory from "./ListingCategory"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("../Map"), {
  ssr: false,
})

const amenitiesData = [
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
]

interface ListingInfoProps {
  user: SafeUser
  description: string
  guestCount: number
  roomCount: number
  bathroomCount: number
  category:
    | {
        icon: IconType
        label: string
        description: string
      }
    | undefined
  locationValue: string
  listingId: string
  amenities: string[] // Add amenities to props
}

const ListingInfo: FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
  listingId,
  amenities = [] // Destructure amenities from props
}) => {
  const { getByValue } = useCountries()
  const coordinates = getByValue(locationValue)?.latlng

  const amenitiesWithIcons = amenitiesData.filter(amenity =>
    amenities.includes(amenity.label)
  )

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <div className="text-lg font-semibold">Amenities</div>
      <ul className="list-disc pl-5">
        {amenitiesWithIcons.length > 0 ? (
          amenitiesWithIcons.map((amenity, index) => (
            <li key={index} className="text-neutral-500 flex items-center gap-2">
              <amenity.icon /> {amenity.label}
            </li>
          ))
        ) : (
          <li className="text-neutral-500">No amenities available</li>
        )}
      </ul>
      <hr />
      <Map center={coordinates} />
      {/* <ListingReviews listingId={listingId} /> */}
    </div>
  )
}

export default ListingInfo
