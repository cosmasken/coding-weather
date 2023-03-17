import {ForeCastCard} from "./ForeCastCard"
import styles from "./ForeCastBox.module.css";
import { ctoF } from "../services/converters";

import { getForecastDay } from "../services/helpers";

export const ForeCastBox = ({ lat, long, forecastData, unitSystem }) => {
  return (
  
    <div className={styles.list}>
    {forecastData && forecastData.map((item) => (
  <div key={item.dt}>
    <ForeCastCard
   // day={item.main.dt}
   day={new Date(item.dt * 1000).toLocaleDateString("en", {
    weekday: "long",
  })}
    iconSrc={`/icons/${item.weather[0].icon}.svg`}

    high={unitSystem==="metric"
    ? Math.round(item.main.temp_max)
    : Math.round(ctoF(item.main.temp_max))
  }
  low={unitSystem==="metric"
    ? Math.round(item.main.temp_min)
    : Math.round(ctoF(item.main.temp_min))
  }
    unit={unitSystem == "metric" ? "°C" : "°F"}
    />

    </div>

))}
     
</div>
  );
};
