import React, { Component } from 'react';
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
      <div className="App">
        <LocationList 
          cities={cities} 
          onSelectionClickWL={this.handleSelectionClickWL}>
        </LocationList>
      </div>
    );
  }
}

export default App;
