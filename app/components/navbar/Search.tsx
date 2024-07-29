"use client"
import useCountries from "@/app/hooks/useCountries"
import useSearchModal from "@/app/hooks/useSearchModal"
import { useSearchParams } from "next/navigation"
import { FC, useMemo, useState, useEffect } from "react"
import { BiSearch } from "react-icons/bi"

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  const searchModal = useSearchModal()
  const params = useSearchParams()
  const { getByValue } = useCountries()

  const locationValue = params?.get("locationValue")
  const startDate = params?.get("startDate")
  const endDate = params?.get("endDate")
  const guestCount = params?.get("guestCount")

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label || "Destination"
    }
    return "Destination"
  }, [getByValue, locationValue])

  const checkInLabel = useMemo(() => {
    if (startDate) {
      const start = new Date(startDate as string)
      return start.toLocaleDateString()
    }
    return "Check-in"
  }, [startDate])

  const checkOutLabel = useMemo(() => {
    if (endDate) {
      const end = new Date(endDate as string)
      return end.toLocaleDateString()
    }
    return "Check-out"
  }, [endDate])

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Who`
    }
    return "Who"
  }, [guestCount])

  const [showSecondSearch, setShowSecondSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSecondSearch(true)
      } else {
        setShowSecondSearch(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="search-field-container">
      {/* First Search Field */}
      {!showSecondSearch && (
        <div
          onClick={searchModal.onOpen}
          className="
          border-[1px]
          w-full
          md:w-auto
          py-2
          rounded-full
          shadow-sm
          hover:shadow-md
          transition
          cursor-pointer
        
        "
        >
          <div
        className="
        flex
        flex-row
        items-center
        justify-between
      "
      >
          <div className="text-sm font-semibold px-6">{locationLabel}</div>
          <div
            className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center
          "
          >
            {checkInLabel} - {checkOutLabel}
          </div>
          <div
            className="
            text-sm
            pl-6
            pr-2
            text-gray-600
            flex
            flex-row
            items-center
            gap-3
          "
          >
            <div className="hidden sm:block">{guestLabel}</div>
            <div
              className="
              p-2
              bg-[#4FBE9FFF]
              rounded-full
              text-white
            "
            >
              <BiSearch size={18} />
            </div>
          </div>
          </div>
        </div>
      )}

      {/* Second Search Field */}
      {showSecondSearch && (
        <div
          onClick={searchModal.onOpen}
          className="
          border-[1px]
          w-full
          md:w-auto
          py-2
          rounded-full
          shadow-sm
          hover:shadow-md
          transition
          cursor-pointer
          flex flex-row items-center justify-between
        "
        >
          <div className="text-sm font-semibold px-6">Anywhere</div>
          <div
            className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center
          "
          >
            Any Week
          </div>
          <div
            className="
            text-sm
            pl-6
            pr-2
            text-gray-600
            flex
            flex-row
            items-center
            gap-3
          "
          >
            <div className="hidden sm:block">Guest</div>
            <div className="p-2 bg-[#4FBE9FFF] rounded-full text-white">
              <BiSearch size={18} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search