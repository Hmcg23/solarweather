import './SearchBar.css';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { City }  from 'country-state-city';

function SearchBar({getDataFromSearch}) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const allCities = City.getAllCities();
  

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    const newFilter = allCities.filter(item => {
        return `${item.name}, ${item.countryCode}`.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredData(newFilter);
  }


  return (
      <div className="searchBar">
        <div className="searchText">
            <SearchIcon className="searchIcon"/>
            <h1>Search for any city</h1>
        </div>
        <input type="text" placeholder=" London, GB" onChange={handleChange} value={searchValue}/>
        {
            filteredData.length !== 0 && (
                <div className="dataResult" style={searchValue === '' ? {display: 'none'} : {display: 'block'}}>
                    {
                    filteredData.slice(0, 15).map((city, id) => (
                        <p key={id} className="dataItem" onClick={() => {
                            getDataFromSearch(`${city.name}, ${city.countryCode}`, [parseFloat(city.latitude), parseFloat(city.longitude)]);
                            setSearchValue('');
                        }}>{city.name}, {city.countryCode}</p>
                    ))
                    }
                </div>                
            )
        }

       
      </div>
  );
}

export default SearchBar;