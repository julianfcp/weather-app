import { createStore } from 'redux';

// creamos el store con la funcion createStore y 
// le enviamos una arrow function (reducer)
export const store = createStore(() => {}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
