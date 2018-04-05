import axios from 'axios'

import { GOOGLE_MAPS } from '../keys'

export default async (address, callback) => {
  const encodedAddress = encodeURI(address)
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&${GOOGLE_MAPS}`

  try {
    const response = await axios.get(url)
    callback(undefined, {
      address: response.data.results[0].formatted_address,
      latitude: response.data.results[0].geometry.location.lat,
      longitude: response.data.results[0].geometry.location.lng
    })
    console.log(response.data.results[0])
  } catch (error) {
    callback('Oops... Something went wrong :(')
  }
}
