enum WeatherConditions {
  Sunny = "Sunny",
  Cloudy = "Cloudy",
  Rainy = "Rainy",
}

const currentWeather: string | number = WeatherConditions.Rainy;

console.log(`The current weather is ${currentWeather}`);