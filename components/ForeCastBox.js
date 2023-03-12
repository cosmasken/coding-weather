import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import {ForeCastCard} from "./ForeCastCard"
import styles from "./ForeCastBox.module.css";
import { getWeekDay } from "../services/helpers";

export const ForeCastBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.list}>
      <ForeCastCard
        title={"Monday"}
        iconSrc={"/icons/sunrise.png"}
        metric={'25°C'}
      />
     
     <ForeCastCard
        title={"Tuesday"}
        iconSrc={"/icons/sunrise.png"}
        metric={'25°C'}
      />
      <ForeCastCard
        title={"Wedenesday"}
        iconSrc={"/icons/sunrise.png"}
        metric={'25°C'}
      />
      <ForeCastCard
        title={"Thursday"}
        iconSrc={"/icons/sunrise.png"}
        metric={'25°C'}
      />
      <ForeCastCard
        title={"Friday"}
        iconSrc={"/icons/sunrise.png"}
        metric={'25°C'}
      />
      <ForeCastCard
        title={"Saturday"}
        iconSrc={"/icons/sunrise.png"}
        metric={'25°C'}
      />
      <ForeCastCard
        title={"Sunday"}
        iconSrc={"/icons/sunrise.png"}
        metric={'25°C'}
      />
    </div>
  );
};
