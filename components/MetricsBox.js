import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import styles from "./MetricsBox.module.css";
import { Visibility } from "./Visibility";
import { Copy } from "./Copy";
export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
  <Visibility
        title={"Wind speed"}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "km/h"}
      />
        
     
      {/* winds speed  */}

      <Visibility
        title={"Wind speed"}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "km/h"}
      />
     
      {/* sunrise & sunset */}
      <Copy
      title={"Sunrise & Sunset"}
        iconSrc={"/icons/sunrise.png"}
        iconSrc1={"/icons/sunset.png"}
        metric={getTime(
          unitSystem,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
        metric1={getTime(
          unitSystem,
          weatherData.sys.sunset,
          weatherData.timezone
        )}
        unit1={getAMPM(
          unitSystem,
          weatherData.sys.sunset,
          weatherData.timezone
        )}
      />
      {/* humidity */}
      
     
      <Visibility
        title={"Humidity"}
        metric={weatherData.main.humidity+"%"}
        unit={"Awesome"}
      />


      {/* visibility */}
    
     
      <Visibility
        title={"Visibility"}
        metric={getVisibility(unitSystem, weatherData.visibility)+" km"}
        unit={'Amazing'}
      />
      {/* air quality */}
      <Visibility
        title={"Air quality"}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={'Unhealthy'}
      />
    </div>
  );
};
