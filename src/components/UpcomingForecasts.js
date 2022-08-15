import { current } from "@reduxjs/toolkit";
import "./UpcomingForecasts.css";

function UpcomingForecasts(selectedCityData) {

    const cityData = selectedCityData.selectedCityData;

    const d = new Date();

    let currentHour = d.getHours();

    console.log(currentHour);

    while (currentHour % 3 !== 0) {
        currentHour++;
    }


    const includesHour = (string) => {
        const hourInDay = 
        currentHour < 10 ? `0${currentHour}:00:00` 
        : currentHour > 12 ? `0${currentHour - 12}:00:00`
        : currentHour === 24 ? `00:00:00` 
        : `${currentHour}:00:00`;
        
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
        <div className="upcomingForecasts">
            <div className="title">
                <h1>Upcoming Forecasts</h1>
            </div>
            {/* Daily Weather Data */}
            <main className="dailyWeatherData">
                {cityData && cityData.list.map((item, index) => (
                    includesHour(item.dt_txt) === true ?
                    <div key={index} className="tempBox">
                        <h2>{dayOfTheWeek(item.dt_txt)}</h2>
                        <h3>{Math.floor(item.main.temp)}°</h3>
                        <p>{item.dt_txt}</p>
                        <p>{currentHour > 12 ? `${currentHour - 12} PM` : currentHour === 0 ? `${currentHour + 1} AM` : `${currentHour} AM`}</p>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather" className="weatherIcon"></img>      
                        <h3>{item.weather[0].description}</h3>              
                    </div> : 
                    <div key={index}></div>
                ))}                
            </main>

        </div>
    )
}

export default UpcomingForecasts