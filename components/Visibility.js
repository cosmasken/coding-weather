import Image from "next/image";
import styles from "./Visibility.module.css";

export const Visibility = ({ title, metric, unit }) => {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <h1>{metric}</h1>
          <p>{unit}</p>
     
    </div>
  );
};
