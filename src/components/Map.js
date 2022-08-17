import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Map({selectedCityData}) {

    const cityData = selectedCityData;

    const coordinates = cityData.city ? [cityData.city.coord.lat, cityData.city.coord.lon] : [0, 0];

    
    return (
        <div className='map'>
            <div className="title">
                <LocationOnIcon />
                <h1>Need a map?</h1>
            </div>
            <div className="leaflet-map">
                <MapContainer center={coordinates} zoom={10} scrollWheelZoom={true} >
                    <ChangeMapView center={coordinates} />
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

function ChangeMapView({ center }) {
    const map = useMap();
    map.flyTo(center, 13, {
        duration: 4
    });

    console.log(center);
  
    return null;
  }
  


export default Map