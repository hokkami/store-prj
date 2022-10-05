import { textAlign } from "@mui/system";
import * as React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";

export default function Location() {
    const [latitude, setLatitude] = useState(34.0873)
    const [longitude, setLongitude] = useState(49.7022)
    const [zoom, setZoom] = useState(15)
    const [pitch, setPitch] = useState(30)
    const [popupNode, setPopupNode] = useState(null)

    let toke = "pk.eyJ1IjoicmV6YS02MyIsImEiOiJjbDg4c3Jsa3MwMGEwM3BudnFodGl2MWo3In0.fQSY2EvZeBBmL39mxI4lNg"

    const clickHandler = () => {
        alert('OK')
    }

    return (
        <Container className="location-main-container">
            <Map className='map-container'
                initialViewState={{
                    longitude,
                    latitude,
                    zoom,
                    // pitch
                }}
                style={{ width: 1100, height: 200  ,marginBottom:'150px' ,textAlign:'center' }}
                mapboxAccessToken={toke}
                // mapStyle="mapbox://styles/reza-63/cl87i7s6g008g14o6gw0fkbmf"
                mapStyle="mapbox://styles/reza-63/cl87i7s6g008g14o6gw0fkbmf"
            // onViewportChange={((newViewport) => setViewport(newViewport))}
            >
                <NavigationControl position="top-left" />

                        <Marker
                            style={{ cursor: 'pointer' }}
                            color='red'
                            onClick={()=>clickHandler()}
                            longitude={parseFloat(longitude)} latitude={parseFloat(latitude)}
                            anchor='bottom'>

                        </Marker>
            </Map>
        </Container >
    );
}
