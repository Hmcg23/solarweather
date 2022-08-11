import './App.css';
import SearchBar from './components/SearchBar';
import cityData from './mock-data/cities.json';

function App() {

  return (
    <div className="App">
      <header>
        <img src="" alt="weather icon"></img>
        <h1>Weather App</h1>
        <p>Find what you need about any city</p>
      </header>
      <SearchBar placeholder="Find your city" cityData={cityData} />
    </div>
  );
}

export default App;
