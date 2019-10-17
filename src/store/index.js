import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

// creamos el store con la funcion createStore y 
// le enviamos una arrow function (reducer)

const initialState = {city: "Cali, co"}; // Valor inicial para la variable City 

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;


export const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
//createStore(city, initialState,composeEnhancers(applyMiddleware(thunk)));
