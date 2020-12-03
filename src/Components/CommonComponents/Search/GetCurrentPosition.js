import { Plugins } from '@capacitor/core'
import { useState } from 'react'

const { Geolocation } = Plugins

const ReverseGeocoding = async () => {
  const [long, setLong] = useState(10)
  const [lat, setLat] = useState(10)
  const coordinates = await Geolocation.getCurrentPosition(true)
  setLong(coordinates.coords.longitude)
  setLat(coordinates.coords.latitude)
  const place = `https://us1.locationiq.com/v1/reverse.php?key=pk.6cea20c72e201ece96127cb84cd81029&lat=${lat}&lon=${long}&format=json`
  // eslint-disable-next-line no-undef
  const response = await fetch(place)
  const JSONdata = await response.json()
  return JSONdata
}

export default ReverseGeocoding
