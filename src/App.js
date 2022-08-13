import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import cityData from './mock-data/cities.json';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';

function App() {

  const [city, setCity] = useState('London');
  const [imperial, setImperial] = useState('imperial')

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ac2bee7b7a1e7d98c8132927d1c4cccb&units=${imperial}`)
    .then(response => {
      if (response.ok) {
        console.log('Success')
        return response.json();
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log("There was an error with your request");
    })
  }, []);

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
        <SearchBar placeholder="Find your city" cityData={cityData} />
      </div>
    </div>
  );
}

export default App;
