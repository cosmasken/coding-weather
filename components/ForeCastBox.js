import {ForeCastCard} from "./ForeCastCard"
import styles from "./ForeCastBox.module.css";
import { ctoF } from "../services/converters";

import { getForecastDay } from "../services/helpers";

export const ForeCastBox = ({ forecastData, unitSystem }) => {
  return (
  
    <div className={styles.list}>
    {forecastData && forecastData.map((item) => (
  <p key={item.dt}>
    <ForeCastCard
    day={item.main.dt}
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

    </p>

))}
     
</div>
  );
};
