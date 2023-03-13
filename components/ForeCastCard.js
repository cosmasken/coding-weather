import Image from "next/image";
import styles from "./ForeCastCard.module.css";

export const ForeCastCard = ({ day, iconSrc, high,low, unit }) => {
  return (
      <div className={styles.daily}>
        <div>{day}</div>
      <Image width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
      <div className={styles.row}>
          <div className="tempText">{high}{unit} </div>
          <div className="tempText">{low}{unit}</div>
          </div>

      </div>
   
  );
};
