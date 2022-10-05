import React from 'react'
import { useState } from 'react'
import Map from 'react-map-gl'
import './Location.css'

export default function Location() {
  const [latitude , setLatitude] = useState(34.08492880619732)
  const [longitude , setLongitude] = useState(49.693805317982616)
  const [zoom , setZoom] = useState(10)

  let toke = "pk.eyJ1IjoicmV6YS02MyIsImEiOiJjbDg4c3Jsa3MwMGEwM3BudnFodGl2MWo3In0.fQSY2EvZeBBmL39mxI4lNg"
    return (
    <div>
      <Map>
        initialViewState ={{
            latitude,
            longitude,
            zoom
        }}
        style = {{width:500 , height :500}}
        {/* mapboxAccessToken={toke}
        mapStyle="mapbox://styles/reza-63/cl87i7s6g008g14o6gw0fkbmf" */}
      </Map>
    </div>
  )
}
