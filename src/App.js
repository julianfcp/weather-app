import React, { Component } from 'react';
import { createStore } from 'redux';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

// Array de ciudades para enviar a LocationList
const cities = [
  "Cali, co",
  "Bogota, co",
  "Washington, us",
  "Rio de janeiro, br",
  "New York, us",
];
// creamos el store con la funcion createStore y 
// le enviamos una arrow function (reducer)
const store = createStore(() => {}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        city: null,
    }
  }

  handleSelectionClickWL = city => {
    console.log("Selecciono ciudad: " + city);
    this.setState({
      city: city,
    });
    
    const action = {
      // type es el nombre de la accion que creamos
      type: 'setCity',
      // el valor para la accion
      value: city
    }
    // se ejecuta el store con la funcion dispatch y el enviamos la accion (objetoyarn)
    store.dispatch(action);
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="h5" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList 
                cities={cities} 
                onSelectionClickWL={this.handleSelectionClickWL}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={10}>
                <div className="details">
                  {
                    city  ?
                    <ForecastExtended city={city}></ForecastExtended> :
                    null
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    </MuiThemeProvider>
    );
  }
}

export default App;
