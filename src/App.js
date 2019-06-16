import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Cali, co",
  "Bogota, co",
  "Mexico, mex",
  "Rio de janeiro, br",
  "New York, us",
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
