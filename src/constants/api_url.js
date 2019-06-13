
// Weather api
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f6e14397267c980d1c3e3172c4b8f325


const location = "Cali, CO";
const api_key = "f6e14397267c980d1c3e3172c4b8f325";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
// agregando &units=metric se obtienen la temperatura en C o F
