import React from 'react'
import { useState } from 'react'
import Map from 'react-map-gl'
import './Location.css'

export default function Location() {
  const [latitude , setLatitude] = useState()
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
        style = {{with400}}
      </Map>
    </div>
  )
}
