"use client"
import useCountries from "@/app/hooks/useCountries"
import { SafeUser } from "@/app/types"
import { FC } from "react"
import Heading from "../Heading"
import Image from "next/image"
import HeartButton from "../HeartButton"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

interface ListingHeadProps {
  title: string
  locationValue: string
  imageSrc: string[] // Array of strings for multiple images
  id: string
  currentUser?: SafeUser | null
}

const ListingHead: FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries()
  const location = getByValue(locationValue)
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          {imageSrc.map((src, index) => (
            <div key={index} className="w-full h-[60vh]">
              <Image
                alt={`Image ${index}`}
                src={src} // Each src should be a string
                fill
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </Carousel>
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}

export default ListingHead
