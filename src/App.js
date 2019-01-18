import React, { Component } from 'react';
import './App.css';
import TimeSlotList from './Components/TimeSlotList.js'

import slotsJson from './data/slots.json';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h2>REWE Lieferslots</h2>
        </header>

        <main className="App-content">
          <h4>Verfügbare Lieferslots:</h4>
        </main>
        <TimeSlotList slotsData={slotsJson}/>
      </div>
    );
  }
}

export default App;
