"use client"
import { FC, useRef, useState } from "react"
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
import { BsFillHouseDoorFill } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"
import { MdOutlineVilla, MdOutlineApartment, MdCottage, MdHouseboat, MdOutlineBed } from "react-icons/md"
import { RiHotelLine } from "react-icons/ri"
import { FaHotel } from "react-icons/fa"
import { IoHomeSharp } from "react-icons/io5"

export const categories = [
  { label: "Apartments", icon: MdOutlineApartment, description: "This property is Apartments!" },
  { label: "Glamping", icon: GiWindmill, description: "This property has Glamping!" },
  { label: "Cottages", icon: MdCottage, description: "This property has Cottages!" },
  { label: "Motels/Hostel", icon: RiHotelLine, description: "This property is in the Motels/Hostel!" },
  { label: "Wooden Houses", icon: GiWoodenDoor, description: "This is property has a beautiful Wooden Houses!" },
  { label: "GuestHouses", icon: GiFamilyHouse, description: "This is property has a beautiful GuestHouses!" },
  { label: "Secluded Accommodation", icon: BsFillHouseDoorFill, description: "This property is in the Secluded Accommodation!" },
  { label: "Hotels", icon: FaHotel, description: "This is beautiful Hotels!" },
  { label: "Dormitories", icon: GiBunkBeds, description: "This property is an Dormitories!" },
  { label: "Caves", icon: GiCaveEntrance, description: "This property is in a spooky cave!" },
  { label: "Campsites", icon: GiForestCamp, description: "This property offers camping activities!" },
  { label: "Treehouses", icon: GiTreehouse, description: "This property is in Treehouses!" },
  { label: "Houseboats", icon: MdHouseboat, description: "This property is in the Houseboats!" },
  { label: "Rooms", icon: MdOutlineBed, description: "This property is in a Rooms!" },
  { label: "Entire Homes", icon: IoHomeSharp, description: "This property is in Entire Homes!" },
  { label: "Luxury Accommodation", icon: IoDiamond, description: "This property is brand new and luxurious!" },
]

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = ({}) => {
  const params = useSearchParams()
  const category = params?.get("category")
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasScrolledRight, setHasScrolledRight] = useState(false)

  const isMainPage = pathname === "/"

  if (!isMainPage) {
    return null
  }

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" })
      setHasScrolledRight(true)
    }
  }

  return (
    <Container>
      <div className="relative">
        {hasScrolledRight && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
          >
            &lt;
          </button>
        )}
        <div
          ref={containerRef}
          className=" flex flex-row items-center justify-between overflow-x-auto max-w-full no-scrollbar"
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
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>
    </Container>
  )
}

export default Categories
