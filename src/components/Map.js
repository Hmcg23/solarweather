import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Map(selectedCityData) {

    const cityData = selectedCityData.selectedCityData;

    const coordinates = cityData.city ? [cityData.city.coord.lat, cityData.city.coord.lon] : [51.5085, -0.1257];

    console.log(coordinates);
    
    return (
        <div className='map'>
            <div className="title">
                <LocationOnIcon />
                <h1>Need a map?</h1>
            </div>
            <div className="leaflet-map">
                <MapContainer center={coordinates} zoom={10} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coordinates}>
                    <Popup>
                    {cityData ? `${cityData.city.name}, ${cityData.city.country}` : ''}
                    </Popup>
                </Marker>
                </MapContainer>    
            </div>
        
        </div>

    )
}

export default Map