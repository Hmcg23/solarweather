import './SearchBar.css';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, cityData}) {
  const [filteredData, setFilteredData] = useState([]);
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    const searchValue = event.target.value;
    const newFilter = cityData.filter(item => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
        setFilteredData([]);
    } else {
        setFilteredData(newFilter);
    }
  }

  useEffect(() => {
    console.log(city);
  }, [city])

  return (
      <div className="searchBar">
        <div className="searchText">
            <SearchIcon className="searchIcon"/>
            <h1>Search for any city</h1>
        </div>
        <input type="text" placeholder={placeholder} onChange={handleChange}/>
        {
            filteredData.length !== 0 && (
                <div className="dataResult">
                    {
                    filteredData.slice(0, 15).map((city, id) => (
                        <p key={id} className="dataItem" onClick={() => {
                            setCity(`${city.name}, ${city.country}`)
                        }}>{city.name}, {city.country}</p>
                    ))
                    }
                </div>                
            )
        }

       
      </div>
  );
}

export default SearchBar;