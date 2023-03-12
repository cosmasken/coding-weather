import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";


import styles from "../styles/Home.module.css";
import { ForecastBox } from "../components/ForecastBox";

export const App = () => {
  const [cityInput, setCityInput] = useState("Nairobi");
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");
  const [selectedView, setSelectedView] = useState("daily");
  

  const [selectedText, setSelectedText] = useState(null);

  const selectText = (text) => {
    setSelectedText(text === selectedText ? null : text);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityInput }),
      });

      const data = await res.json();

      if (data.cod === 200) {
        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityInput}&units=${unitSystem}&cnt=7&appid=${process.env.OPENWEATHER_API_KEY}`);
        const forecastData = await forecastRes.json();
        console.log(forecastData)
        //setWeatherData({ ...currentWeatherData, forecast: forecastData.list });
      } else {
        console.log("City 777 found" )
       // setWeatherData({ message: "City not found" });
      }


      setWeatherData({ ...data });
      setCityInput("");
    };
    getData();
  }, [triggerFetch]);

  

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <div style={{flexDirection:'column'}}>
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
        <Header>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" ,width:'100%',flexDirection:'row' }}>
  <div>
    <p onClick={() => selectText('Daily')} style={{ fontWeight: selectedText === 'Text 1' ? 'bold' : 'normal', margin: "0 1rem", cursor: "pointer" }}>
      Daily
    </p>
    <p onClick={() => selectText('Weekly')} style={{ fontWeight: selectedText === 'Text 2' ? 'bold' : 'normal', margin: "0 1rem", cursor: "pointer" }}>
      Weekly
    </p>
  </div>
  <div style={{ display: "flex", alignItems: "right" }}>

  <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
    <img src="./components/profile.jpeg" alt="Profile Image" style={{ borderRadius: "50%", width: "30px", height: "30px", marginLeft: "1rem" }} />
 
           </div>
</nav>


        </Header>
        <ForecastBox weatherData={weatherData} unitSystem={unitSystem} />
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
