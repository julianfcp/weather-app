import {url_forecast, api_key} from './../constants/api_url'

const getUrlForecast = city => {

return `${url_forecast}?q=${city}&appid=${api_key}`;

}

export default getUrlForecast;