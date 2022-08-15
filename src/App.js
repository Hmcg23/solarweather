import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import Map from './components/Map';
import cities from 'cities.json';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import UpcomingForecasts from './components/UpcomingForecasts';

function App() {

  const apiKey = "ac2bee7b7a1e7d98c8132927d1c4cccb";

  const [city, setCity] = useState('Fresno');
  const [imperial, setImperial] = useState('imperial')
  const [selectedCityData, setSelectedCityData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${imperial}`)
      if (!response.ok) {
        throw new Error('Data coud not be fetched!');
      } else {
        return response.json();
      }
    }

    fetchData()
    .then(data => {
      setSelectedCityData(data);
    })
    .catch(error => {
      console.log("There was an error with your request");
    })
  }, [city, imperial]);

  return (
    <div className="App">
      <header>
        <WbTwilightRoundedIcon className="weatherIcon"/>
        <div className="headerText">
          <h1>Weather App</h1>
          <p>Find what you need about any city</p>          
        </div>
      </header>
        <SearchBar placeholder="London, GB" cityData={cities} />
      <div className="components">
        <Favorites />
        <UpcomingForecasts selectedCityData={selectedCityData}/>
        <Map selectedCityData={selectedCityData} />
      </div>
    </div>
  );
}

export default App;
