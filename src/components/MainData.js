import './MainData.css'
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';

function MainData(selectedCityData) {

    const cityData = selectedCityData.selectedCityData;

    const d = new Date();

    const currentDay = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    console.log(currentDay);


    return (
        <div className="mainData">
            <div className="title">
                <LocationCityRoundedIcon />
                <h1>{cityData ? cityData.city.name : ''}, {cityData ? cityData.city.country : ''}</h1>
            </div>
            <main>

            </main>
        </div>
    )
}

export default MainData