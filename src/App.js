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

// Array de ciudades para enviar a LocationList
const cities = [
  "Cali, co",
  "Bogota, co",
  "Mexico, mex",
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
    console.log("handle Seleccion WL" + city);
    this.setState({
      city: city,
    })
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
                    city === null ?
                      <h1>No se ha seleccionado Ciudad</h1> :
                      <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>

      {/*<div className="App">
        <LocationList 
          cities={cities} 
          onSelectionClickWL={this.handleSelectionClickWL}>
        </LocationList>
    </div>*/}
    </MuiThemeProvider>
    );
  }
}

export default App;
