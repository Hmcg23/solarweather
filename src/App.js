import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import cities from 'cities.json';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import MainData from './components/MainData';

function App() {

  const apiKey = "ac2bee7b7a1e7d98c8132927d1c4cccb";

  const [city, setCity] = useState('London');
  const [imperial, setImperial] = useState('imperial')
  const [selectedCityData, setSelectedCityData] = useState({});

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${imperial}`)
    .then(response => {
      if (response.ok) {
        console.log('Success');
        return response.json();
      }
    })
    .then(data => {
      setSelectedCityData(data);
      console.log(data);
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
      <div className="components">
        <Favorites />
        <SearchBar placeholder="London, GB" cityData={cities} />
        <MainData selectedCityData={selectedCityData}/>
      </div>
    </div>
  );
}

export default App;
