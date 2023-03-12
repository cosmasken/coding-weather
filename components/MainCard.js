import Image from "next/image";
import { ctoF } from "../services/converters";
import styles from "./MainCard.module.css";
import { DateAndTime } from "./DateAndTime";
import profilePic from '../public/images/sky.jpeg';

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      
    
      <Image
        width="300px"
        height="300px"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.main.temp)
          : Math.round(ctoF(weatherData.main.temp))}
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>

      <div className="date">

      <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
      
      </div>

          
      <p>
        {description}
      </p>
      <Image
        src={profilePic}
        alt="Picture of the aubackground"
      width={'500px'}
      />
     
    </div>
  );
};
