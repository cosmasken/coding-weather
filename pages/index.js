import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";
import { ForeCastBox } from "../components/ForeCastBox";
import { ForeCastCard } from "../components/ForeCastCard";


import styles from "../styles/Home.module.css";


export const App = () => {
  const [cityInput, setCityInput] = useState("Nairobi");
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [forecastData, setForecastData] = useState([]);
  const [unitSystem, setUnitSystem] = useState("metric");
  const [viewMode, setViewMode] = useState('daily'); 
  const handleViewModeChange = (newMode) => {
    setViewMode(newMode);
  
  }

  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityInput })
      });


   const data = await res.json();


  setWeatherData({ ...data });

      setCityInput("");
    };

    const getForecast = async () => {
      const res = await fetch("api/forecast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      
      });

   const forecast = await res.json();
   
console.log(forecast)

   setForecastData(forecast.list );

    };

    getData();
    getForecast();
  }, [triggerFetch]);

  

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <div style={{flexDirection:'column',justifyContent:'center',width:'100%'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Search
            placeHolder="Search for places..."
            value={cityInput}
            onFocus={(e) => {
              e.target.value = "";
              e.target.placeholder = "";
            }}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={(e) => {
              e.keyCode === 13 && setTriggerFetch(!triggerFetch);
              e.target.placeholder = "Search for places...";
            }}
          />
        </div>
 
      <MainCard
        city={weatherData.name}
        country={weatherData.sys.country}
        description={weatherData.weather[0].description}
        iconName={weatherData.weather[0].icon}
        unitSystem={unitSystem}
        weatherData={weatherData}
       
      />

      </div>
      <ContentBox>

<nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" ,width:'100%',flexDirection:'row' }}>

<div className={styles.row}>
      <div
        className={viewMode === 'daily' ? styles.selected : ''}
        onClick={() => handleViewModeChange('daily')}
      >
        Daily
      </div>
      <div
        className={viewMode === 'weekly' ? styles.selected : ''}
        onClick={() => handleViewModeChange('weekly')}
      >
        Weekly
      </div>
    </div>

  <div style={{ display: "flex", alignItems: "right" }}>

  <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
    <img src="./images/profile.jpeg" alt="Profile Image" style={{ borderRadius: "50%", width: "30px", height: "30px", marginLeft: "1rem" }} />
 
           </div>
</nav>

{
  forecastData &&
<ForeCastBox lat={latitude} long={longitude}forecastData={forecastData} unitSystem={unitSystem} />
}

        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        </ContentBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="City not found, try again!">
      <Search
        onFocus={(e) => (e.target.value = "")}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
      />
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
