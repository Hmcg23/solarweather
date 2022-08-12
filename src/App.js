import './App.css';
import SearchBar from './components/SearchBar';
import cityData from './mock-data/cities.json';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';

function App() {

  return (
    <div className="App">
      <header>
        <WbTwilightRoundedIcon className="weatherIcon"/>
        <div className="headerText">
          <h1>Weather App</h1>
          <p>Find what you need about any city</p>          
        </div>
      </header>
      <SearchBar placeholder="Find your city" cityData={cityData} />
    </div>
  );
}

export default App;
