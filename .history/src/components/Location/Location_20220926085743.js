import React from 'react'
import { useState } from 'react'
import Map from 'react-map-gl'
import './Location.css'

export default function Location() {
  const [latitude , setLatitude] = useState(34.08492880619732)
  const [longitude , setLongitude] = useState()
  const [zoom , setZoom] = useState()
    return (
    <div>
      <Map>
        initialViewState ={{
            latitude,
            longitude,
            zoom
        }}
        style = {{width:500 , height :500}}
        mapStyle = "mapbox://styles/mapbox/streets-v9"
      </Map>
    </div>
  )
}
