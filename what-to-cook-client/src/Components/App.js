import React, { Component } from 'react';
import 'bootstrap'
import '../App.css';
import FilterCriterias from './FilterCriterias.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterCriterias />
      </div>
    );
  }
}

export default App;
