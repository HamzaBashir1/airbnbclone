"use client"
import useCountries from "@/app/hooks/useCountries"
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "@jedrazb/react-google-places-autocomplete"
import { FC, useState } from "react"
import Select from "react-select"

export type CountrySelectValue = {
  value: string
  label: string
  flag: string
  latlng: number[]
  region: string
}

interface CountrySelectProps {
  value?: CountrySelectValue
  onChange: (value: CountrySelectValue) => void
}

const useSlovakia = () => {
  const { getAll } = useCountries()
  return () => getAll().filter(country => country.label === 'Slovakia')
}

const CountrySelect: FC<CountrySelectProps> = ({ value, onChange }) => {
  const getSlovakia = useSlovakia()
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [coordinates, setCoordinates] = useState<{ lat: number | null, lng: number | null }>({ lat: null, lng: null })

  return (
    <div>
      <Select
        placeholder="anywhere"
        isClearable
        options={getSlovakia()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},<span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
          placeholder: 'Search Property Address',
          isClearable: true,
          className: 'w-full mt-4',       
          // onChange: (place) => {
          //   console.log(place);
          //   setSelectedAddress(place);
          //   geocodeByAddress(place.label)
          //     .then(result => getLatLng(result[0]))
          //     .then(({ lat, lng }) => {
          //       setCoordinates({ lat, lng });
          //     })
          // }
        }}
      />
    </div>
  )
}

export default CountrySelect
