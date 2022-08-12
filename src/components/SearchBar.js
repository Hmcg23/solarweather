import './SearchBar.css';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, cityData}) {
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (event) => {
    const searchValue = event.target.value;
    const newFilter = cityData.filter(item => {
        return item.city_name.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
        setFilteredData([]);
    } else {
        setFilteredData(newFilter);
    }
  }

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
                    filteredData.slice(0, 15).map((city) => (
                        <p key={city.id} className="dataItem">{city.city_name}</p>
                    ))
                    }
                </div>                
            )
        }

       
      </div>
  );
}

export default SearchBar;