import './SearchBar.css';
import { useState } from 'react';

function SearchBar({placeholder, cityData}) {
  const [query, setQuery] = useState('');

  return (
      <div className="searchBar">
        <div className='searchIcon'></div>
        <h2>Search for any city</h2>
        <input type="text" placeholder={placeholder} onChange={event => setQuery(event.target.value)}/>
        {
          cityData.filter(city => {
            if (query === '') {
              return city;
            } else if (city.city_name.toLowerCase().includes(query.toLowerCase())) {
              return city;
            }
          }).map((city) => (
              <p key={city.id}>{city.city_name}</p>
          ))
        }        
      </div>
  );
}

export default SearchBar;