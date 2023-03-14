import Image from "next/image";
import styles from "./Visibility.module.css";

export const Visibility = ({ suncard,title,iconSrc1,iconScrc2,metric1, metric, unit,unit1 }) => {
  return (
    <div className={styles.wrapper}>
  

{suncard ? (
        <>
        <p>Sunrise</p>
            <div className={styles.content}>
              <Image width="50px" height="50px" src={iconSrc1} alt="weatherIcon" />
              <div>
                <h1>{metric}</h1>
                <p>{unit}</p>
              </div>
            </div>
            <p>Sunset</p>
            <div className={styles.content}>
              <Image width="50px" height="50px" src={iconScrc2} alt="weatherIcon" />
              <div>
                <h1>{metric1}</h1>
                <p>{unit1}</p>
              </div>
            </div>
        </>
      ) : (
        <>
         <p>{title}</p>
      <h1>{metric}</h1>
          <p>{unit}</p>
        </>
      )}
     
     
    </div>
  );
};
