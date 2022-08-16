import { useEffect, useState } from "react";

function Clock(selectedCityData) {
    const [clock, setClock] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    
    useEffect(() => {
        setInterval(() => {
          const date = new Date();
            setClock(date.toLocaleTimeString());
            setCurrentDate(date.toLocaleDateString());
          }, 1000);
    })

    return (
        <div className="clock">
          <h1 className="clockTimer">{clock}</h1>
          <h2 className="currentDate">{currentDate}</h2>            
        </div>
    )


    
}

export default Clock


