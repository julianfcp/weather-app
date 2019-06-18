import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LocationList from './components/LocationList';

// Array de ciudades para enviar a LocationList
const cities = [
  "Cali, co",
  "Bogota, co",
  "Mexico, mex",
  "Rio de janeiro, br",
  "New York, us",
];

class App extends Component {
  handleSelectionClickWL = city => {
    console.log("handle Seleccion WL" + city);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
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
              <div className="details"></div>
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
