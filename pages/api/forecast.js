export default async function handler(req, res) {
    const lat = 1.2921;
  const lon = 36.8219;
  const count = 7;

    const getForecastData = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${count}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
      );
    const data = await getForecastData.json();

    res.status(200).json(data);

    
  }
  