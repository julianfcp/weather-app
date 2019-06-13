import convert from 'convert-units';
import {SUN} from "./../constants/wheathers"


const getTemp = tempKelvin => {
    return Number(convert(tempKelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weather_data => {
    return SUN;
}

// funcion que recibe un solo parametro (weather_data)
// Esta funcion ayuda a parametrizar la informacion traida del api o servicio
const transformWeather = weather_data => {  
    const { humidity, temp} = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);


    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;