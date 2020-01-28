import React from 'react';
import CardContainer from './components/CardContainer/CardContainer';
import './App.css';
import './index.css';

function App() {

  return(
    <div className="App">
      <h1 className="Header" style={{fontFamily: 'Kanit'}}>React Wars</h1>
      <CardContainer />
    </div>
  );
}

export default App;
