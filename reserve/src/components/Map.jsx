import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

function Map() {
    return (
        <div className='py-10'>

        <MapContainer center={[51.700339823681965, 5.273124809237124]} zoom={13} scrollWheelZoom={false} className='h-[800px] w-[100%]'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* 51.700339823681965, 5.273124809237124 */}
            <Marker position={[ 51.700, 5.273]}>
                <Popup>
                    Coastal Vault Security
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}

export default Map