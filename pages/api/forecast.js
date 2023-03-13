export default async function handler(req, res) {
    const lat = 38.7267;
  const lon = -9.1403;
  const count = 7;

    const getForecastData = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${count}&appid=${process.env.OPENWEATHER_API_KEY}`
      );
    const data = await getForecastData.json();
    res.status(200).json(data);

    
  }
  