import React, { Component } from 'react';
import './App.css';
import Slot from './Slot.js';
import {compareAsc} from 'date-fns';

import slots from './data/slots.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      zipCode: ''
    }
  }

  handleZipCodeChange(event) {
    this.setState({zipCode: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>REWE Lieferslots</h2>
        </header>

        <main className="App-content">
          <label>PLZ: </label><input type="text" name="zipCode" onChange={this.handleZipCodeChange.bind(this)} />
          <h4>Verfügbare Lieferslots:</h4>
          <p>{this.state.zipCode}</p>
          <ul>
            {
              slots.filter(slot => { return slot.zipCode.startsWith(this.state.zipCode)})
                   .sort((slot1, slot2) => compareAsc(new Date(slot1.startTime), new Date(slot2.startTime)))
                   .map(slot => <Slot slot={slot} />) }
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
