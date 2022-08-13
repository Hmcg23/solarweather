import "./MainData.css";
import LocationCitySharpIcon from '@mui/icons-material/LocationCitySharp';

function MainData(selectedCityData) {

    const cityData = selectedCityData.selectedCityData;

    const includesTwelve = (string) => {
        if (string.includes("12:00:00")) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="mainData">
            <LocationCitySharpIcon />
            <h1>{cityData.city.name}, {cityData.city.country}</h1>
            {cityData.list.map((item, index) => (
                includesTwelve(item.dt_txt) === true ?

                <div key={index}>
                    <p>{item.dt_txt}</p>
                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather"></img>      
                    <p>{item.weather[0].description}</p>              
                </div> : 
                <div></div>
            ))}
        </div>
    )
}

export default MainData