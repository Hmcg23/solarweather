import "./MainData.css";
import LocationCitySharpIcon from '@mui/icons-material/LocationCitySharp';

function MainData(selectedCityData) {

    const cityData = selectedCityData.selectedCityData;

    return (
        <div className="mainData">
            <LocationCitySharpIcon />
            <h1>{cityData.city.name}, {cityData.city.country}</h1>
            {cityData.list.map((item, index) => (
                <img key={index} src={`https://openweathermap.org/img/wn/${item.weather.icon}.png`} alt="weather"></img>
            ))}
        </div>
    )
}

export default MainData