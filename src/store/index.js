import { createStore } from 'redux';
import { city } from './../reducers/city'

// creamos el store con la funcion createStore y 
// le enviamos una arrow function (reducer)

const initialState = {city: "Cali, co"}; // Valor inicial para la variable City 

export const store = createStore(city, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
