import Image from "next/image";
import styles from "./WindSpeed.module.css";

export const WindSpeed = ({ title, metric, unit }) => {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <h1>{metric}</h1>
          <p>{unit}</p>
      {/* <div className={styles.content}>
        <Image width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
        <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div> */}
    </div>
  );
};
