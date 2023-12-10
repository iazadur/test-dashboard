'use client'

// Map Dependencies [ "@turf/turf": "6.5.0", "deck.gl": "8.8.14", "maplibre-gl": "2.4.0", "react-map-gl": "7.0.19" ]
import React, { useRef, useState } from 'react'
import { FullscreenControl, Map, NavigationControl } from 'react-map-gl'
import maplibregl from 'maplibre-gl'

// Import Styles
import 'maplibre-gl/dist/maplibre-gl.css'

// Map Base Url
export const MAP_BASE_URL = 'https://map.barikoi.com'

// Map Configs
export const MAP_CONFIG = {
  STYLES: [
    {
      title: 'Light',
      uri: `${ MAP_BASE_URL }/styles/osm-liberty/style.json?key=MjYwMTpHOUFRTEJMQVBE`
    },
    {
      title: 'Dark',
      uri: `${ MAP_BASE_URL }/styles/barikoi-dark/style.json?key=MjYwMTpHOUFRTEJMQVBE`
    },
    {
      title: 'Bangla',
      // uri: ${ MAP_BASE_URL }/styles/barikoi-bangla/style.json?key=${ MAP_API_ACCESS_TOKEN },
      uri: `${ MAP_BASE_URL }/styles/barikoi-bangla/style.json?key=MjYwMTpHOUFRTEJMQVBE`
    }
  ]
}

export default function DeckGlMap() {
  // States
  const [initialViewState, setInitialViewState] = useState({
    longitude: 90.39017821904588,
    latitude: 23.719800220780733,
    minZoom: 4,
    maxZoom: 24,
    zoom: 8,
    pitch: 0,
    bearing: 0,
    doubleClickZoom: false
  })
  // const [layers, setLayes]: any = useState([])
  // const [popupInfo, setPopupInfo]: any = useState(null)

  // Refs
  const mapRef: any = useRef(null)
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        minWidth: '100%',
        minHeight: '100%',
        padding: '0px',
      }}
    >
      <Map
        initialViewState={ initialViewState }
        ref={ mapRef }
        mapStyle={ MAP_CONFIG.STYLES[2].uri }
        mapLib={ maplibregl }
        style={{ width: '100%', height: '100%', minWidth: '100%', minHeight: '100%', padding: '0px' }}
      >
        <FullscreenControl /> 
        <NavigationControl /> 
       
        {/* <DeckGLOverlay layers={ [...layers] } /> */}
        {/* <StyleControl />
        { fullscreenControl ? <FullscreenControl /> : '' }
        { navigationControl ? <NavigationControl /> : '' } */}
      </Map>
    </div>
  )
}
