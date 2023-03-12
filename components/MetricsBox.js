import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";
import { SunriseCard } from "./SunriseCard";
import { Visibility } from "./Visibility";
import { Copy } from "./Copy";
import {WindSpeed} from './WindSpeed';
export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      {/* winds speed  */}
      <WindSpeed
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      {/* sunrise & sunset */}
      <Copy
      title={"Sunrise & Sunset"}
        iconSrc={"/icons/sunrise.png"}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      {/* humidity */}
      
      
      <Visibility
        title={"Humidity"}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={"Awesome"}
      />
      {/* visibility */}
     
      <Visibility
        title={"Visibility"}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={'Amazing'}
      />
      {/* air quality */}
      <Visibility
        title={"Air qulaity"}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={'Unhealthy'}
      />
    </div>
  );
};
