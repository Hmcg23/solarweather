import './MainData.css'
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';

function MainData(selectedCityData) {

    const cityData = selectedCityData.selectedCityData;

    const d = new Date();

    const currentDay = `${d.getFullYear()}-${(d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}-${d.getDate()}`;

    let currentHour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();

    while (currentHour % 3 !== 0) {
        currentHour++;
    }

    const formattedDay = `${currentDay} ${currentHour < 10 ? `0${currentHour}:00:00`: `${currentHour}:00:00`}`;

    console.log(formattedDay);

    return (
        <div className="mainData">
            <div className="title">
                <LocationCityRoundedIcon />
                <h1>{cityData ? cityData.city.name : ''}, {cityData ? cityData.city.country : ''}</h1>
            </div>
            <main>
                {cityData && cityData.list.map((item, index) => (
                    item.dt_txt.includes(currentDay) ?
                    <div>
                        <h1>{Math.floor(item.main.temp)}°</h1>
                    </div>
                    : <div>Haha</div>
                ))}
            </main>
        </div>
    )
}

export default MainData