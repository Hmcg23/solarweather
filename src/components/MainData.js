import './MainData.css'
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';

function MainData({selectedCityData, units}) {

    const cityData = selectedCityData;

    return (
        <div className="mainData">
            <div className="title">
                <LocationCityRoundedIcon />
                <h1>{cityData ? cityData.city.name : ''}, {cityData ? cityData.city.country : ''}</h1>
            </div>
            <main>
                <div className="tempData">
                    <h1 id="mainTemp">{cityData ? Math.floor(cityData.list[0].main.temp) : ''}°</h1>
                    <h2>Low: {cityData ? Math.floor(cityData.list[0].main.temp_min) : ''} High: {cityData ? Math.floor(cityData.list[0].main.temp_max) : ''}</h2>
                    <img src={cityData ? `https://openweathermap.org/img/wn/${cityData.list[0].weather[0].icon}.png` : ''} alt="weather icon" />
                    <h3>{cityData ? cityData.list[0].weather[0].description : ''}</h3>
                    <h2>Feels Like: {cityData ? Math.floor(cityData.list[0].main.feels_like) : ''}</h2>
                    <h2>Humidity: {cityData ? Math.floor(cityData.list[0].main.humidity) : ''}</h2>
                    <h2>Wind Speed: {cityData ? Math.floor(cityData.list[0].wind.speed) : ''} {units === 'imperial' ? 'mph' : 'm/s'}</h2>                    
                </div>

            </main>
        </div>
    )
}

export default MainData