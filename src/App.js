import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { setCity } from './actions'
import { connect } from 'react-redux';


// Array de ciudades para enviar a LocationList
const cities = [
  "Cali, co",
  "Bogota, co",
  "Washington, us",
  "Rio de janeiro, br",
  "New York, us",
];


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

    // se ejecuta la funcion setCity como resultado de la conexion
    // de la aplicacion con redux
    this.props.setCity(city);
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
// se hace el mapeo de las acciones a ejecutar con el dispatch
const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});
// Se realiza la conexion de la aplicacion con redux
const AppConnected = connect(null, mapDispatchToPropsActions)(App);
export default AppConnected;