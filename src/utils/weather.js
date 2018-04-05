import axios from 'axios'

import { DARK_SKY } from '../keys'

export default async (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/${DARK_SKY}/${lat},${lng}`

  try {
    const response = await axios.get(url, {
      proxy: {
        host: '192.168.0.155',
        port: 8888
      }, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    const parsedRes = JSON.parse(response)
    console.log('Got weather:', parsedRes)
    callback(undefined, {

    })
  } catch (error) {
    callback('Unable to fetch weather... Sorry')
  }
}