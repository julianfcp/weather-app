import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
// Con rccp + Tab creo un componente

// Array de ciudades para enviar a LocationList
const cities = [
  "Cali, co",
  "Bogota, co",
  "Washington, us",
  "Rio de janeiro, br",
  "New York, us",
];


class App extends Component {
  render() {
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
              <LocationListContainer 
                cities={cities} 
                onSelectionClickWL={this.handleSelectionClickWL}>
              </LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={10}>
                <div className="details">
                    <ForecastExtendedContainer />
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