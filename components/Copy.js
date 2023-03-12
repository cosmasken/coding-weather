import Image from "next/image";
import styles from "./MetricsCard.module.css";

export const Copy = ({ title, iconSrc,iconSrc1, metric,metric1,unit1, unit }) => {
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
      <Image width="100px" height="100px" src={iconSrc1} alt="weatherIcon" />
      <div>
        <h1>{metric1}</h1>
        <p>{unit1}</p>
      </div>
    </div>
  </div>
  );
};
