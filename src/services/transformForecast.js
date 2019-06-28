import moment from 'moment';
// locale/es nos ayuda a traducir los dias de la semana a espanol
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data => (
    // utilizo la libreria moment para hacer filtro sobre 3 horas
    // el forecast extendido viene por horas por cada dia, la idea
    // es filtrar 3 horas del dia. el objeto que viene se llama list
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 7 ||
        moment.unix(item.dt).hour() === 13 ||
        moment.unix(item.dt).hour() === 19 
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item),
        }
    ))
);

export default transformForecast;