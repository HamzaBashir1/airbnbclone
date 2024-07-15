"use client"
import { FC } from "react"
import Container from "../Container"
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"
import {
  GiTreehouse,
  GiCaveEntrance,
  GiForestCamp,
  GiBunkBeds,
  GiWindmill,
  GiWoodenDoor,
  GiFamilyHouse,
} from "react-icons/gi"
import {  BsFillHouseDoorFill } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"
import { MdOutlineVilla, MdOutlineApartment, MdCottage, MdHouseboat, MdOutlineBed } from "react-icons/md"
import { RiHotelLine } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";



export const categories = [
  { label: "Apartments", icon: MdOutlineApartment , description: "This property is Apartments!" },
  { label: "Glamping", icon: GiWindmill, description: "This property has Glamping!" },
  { label: "Cottages", icon: MdCottage , description: "This property has Cottages!" },
  {
    label: "Motels/Hostel",
    icon: RiHotelLine,
    description: "This property is in the Motels/Hostel!",
  },
  {
    label: "Wooden Houses",
    icon: GiWoodenDoor,
    description: "This is property has a beautiful Wooden Houses!",
  },
  {
    label: "GuestHouses",
    icon: GiFamilyHouse,
    description: "This is property has a beautiful GuestHouses!",
  },
  {
    label: "Secluded Accommodation",
    icon: BsFillHouseDoorFill,
    description: "This property is in the Secluded Accommodation!",
  },
  {
    label: "Hotels",
    icon: FaHotel,
    description: "This is beautiful Hotels!",
  },
  {
    label: "Dormitories",
    icon: GiBunkBeds,
    description: "This property is an Dormitories!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Campsites",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Treehouses",
    icon: GiTreehouse,
    description: "This property is in Treehouses!",
  },
  {
    label: "Houseboats",
    icon: MdHouseboat,
    description: "This property is in the Houseboats!",
  },
  {
    label: "Rooms",
    icon: MdOutlineBed,
    description: "This property is in a Rooms!",
  },
  {
    label: "Entire Homes",
    icon: IoHomeSharp,
    description: "This property is in Entire Homes!",
  },
  {
    label: "Luxury Accomodation",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
]

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = ({}) => {
  const params = useSearchParams()
  const category = params?.get("category")
  const pathname = usePathname()

  const isMainPage = pathname === "/"

  if (!isMainPage) {
    return null
  }
  return (
    <Container>
      <div
        className="
        pt-4 
        flex 
        flex-row 
        items-center 
        justify-between
        overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
