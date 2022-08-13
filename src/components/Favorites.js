import './Favorites.css';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import favoritesData from '../mock-data/favorites-data.json';

function Favorites() {

  return (
    <div className="favorites">
        <header>
            <FavoriteRoundedIcon />
            <h1>Favorites</h1>            
        </header>
        <main>
            {
            favoritesData.map(item => (
                <div key={item.id} className="favoriteLocationItem">
                    <div className="mainText">
                        <h2>{item.city_name}</h2>
                        <p>{item.time}</p>                        
                    </div>
                    <h2>{item.temperature}</h2>
                </div>
            ))
            }
        </main>
    </div>
  );
}

export default Favorites;