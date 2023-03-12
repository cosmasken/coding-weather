import Image from "next/image";
import styles from "./MetricsCard.module.css";

export const Copy = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className={styles.wrapper}>
    <p>Sunrise</p>
    <div className={styles.content}>
      <Image width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
      <div>
        <h1>{metric}</h1>
        <p>{unit}</p>
      </div>
    </div>
    <p>Sunset</p>
    <div className={styles.content}>
      <Image width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
      <div>
        <h1>{metric}</h1>
        <p>{unit}</p>
      </div>
    </div>
  </div>
  );
};
