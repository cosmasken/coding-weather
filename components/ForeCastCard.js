import Image from "next/image";
import styles from "./MetricsCard.module.css";

export const ForeCastCard = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <Image width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
      <div style={{flexDirection:'row'}}>
         <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};
