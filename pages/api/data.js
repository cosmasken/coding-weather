export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}


// export default async function handler(req, res) {
//   const { cityInput } = req.body;
//   const lat = 38.7267;
//   const lon = -9.1403;

//   try {
//     const weatherData = await Promise.all([
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`),
//       fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`),
 
//       // Add as many URLs as needed
//     ]);

//     const responseData = await Promise.all(weatherData.map((response) => response.json()));

//     const [openWeatherMapData, forecastApiData] = responseData;
//     // Destructure the responseData array and assign each item to a variable

//     res.status(200).json({ openWeatherMapData, forecastApiData });
//     console.log(forecastApiData);
//     // Send the data as an object with keys matching the variable names
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// }