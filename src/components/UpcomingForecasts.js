import "./UpcomingForecasts.css";
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';


function UpcomingForecasts(selectedCityData) {

    const cityData = selectedCityData.selectedCityData;

    const d = new Date();

    let currentHour = d.getHours();
    while (currentHour % 3 !== 0) {
        currentHour++;
    }

    const includesHour = (string) => {
        const hourInDay = currentHour < 10 ? `0${currentHour}:00:00` : currentHour === 24 ? `00:00:00` : `${currentHour}:00:00`
        if (string.includes(hourInDay)) {
            return true;
        } else {
            return false;
        }
    }

    const dayOfTheWeek = (date) => {
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date(date);
        let day = daysOfTheWeek[d.getDay()];
        return day;
    }

    return (
        <div className="mainData">
            <AirTwoToneIcon className="windIcon"/>
            <h1>Upcoming Forecasts</h1>
            {/* Daily Weather Data */}
            {cityData && cityData.list.map((item, index) => (
                includesHour(item.dt_txt) === true ?
                <div key={index}>
                    <h2>{dayOfTheWeek(item.dt_txt)}</h2>
                    <h3>{Math.floor(item.main.temp)}°</h3>
                    <p>{currentHour > 12 ? `${currentHour - 12} PM` : `${currentHour} AM`}</p>
                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather"></img>      
                    <p>{item.weather[0].description}</p>              
                </div> : 
                <div key={index}></div>
            ))}
        </div>
    )
}

export default UpcomingForecasts