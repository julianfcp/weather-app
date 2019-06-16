import convert from 'convert-units';
import {
        CLOUD,
        SUN,
        RAIN,
        SNOW,
        THUNDER,
        DRIZZLE
        } from "./../constants/wheathers"

// Esta funcion convierte grados kelvin a Celcius usando la libreria convert-units
const getTemp = tempKelvin => {
    return Number(convert(tempKelvin).from("K").to("C").toFixed(2));
}
// Esta funcion setea el weather State para utilizar el icono adecuado
const getWeatherState = weather_id => {
    const { id } = weather_id;
    if ( id < 300 ){ return THUNDER;}
    else if (id < 400){ return DRIZZLE;}
    else if (id < 500){ return RAIN;}
    else if (id < 700){ return SNOW;}
    else if (id === 800){ return SUN;}
    else { return CLOUD;}
}

// funcion que recibe un solo parametro (weather_data)
// Esta funcion ayuda a parametrizar la informacion traida del api o servicio
const transformWeather = weather_data => {  
    const { humidity, temp} = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
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