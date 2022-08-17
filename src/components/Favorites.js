import './Favorites.css';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

function Favorites({getDataFromSearch}) {

    const popularCities = ['Tokyo, JP', 'London, GB', 'Los Angeles, US', 'New York, US', 'Dubai, AE', 'Mexico City, MX', 'Paris, FR', 'Istanbul, TR']

  return (
    <div className="favorites">
        <header>
            <FavoriteRoundedIcon />
            <h1>Cities</h1>            
        </header>
        <main>
            {
            popularCities.map((item, index) => (
                <h2 key={index} className="favoriteLocationItem" onClick={() => {getDataFromSearch(item)}}>{item}</h2>
            ))
            }
        </main>
    </div>
  );
}

export default Favorites;