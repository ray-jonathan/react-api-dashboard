import React from 'react';
import './App.css'; //
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';
import GOT from './GOT';
import All from './All';
import {Link, Route, Switch, withRouter} from 'react-router-dom';



function App() {
  return (
    <div style={{backgroundColor: `#282c34`, color: `#FFF`}} className="App">
      <h2 style={{margin: `0`} }>React Dashboard</h2>
      <Link style={{color: `#FFF`}} to="/all" >All</Link><br />
      <Link style={{color: `#FFF`}} to="/weather" >Weather</Link><br />
      <Link style={{color: `#FFF`}} to="/fortune" >Fortune</Link><br />
      <Link style={{color: `#FFF`}} to="/joke" >Joke</Link><br />
      <Link style={{color: `#FFF`}} to="/got" >GOT</Link><br />
      <header className="App-header">
      <Route path="/" exact component={All} />
      <Route path="/all" component={All} />
      <Route path="/weather" component={Weather} />
      <Route path="/fortune" component={Fortune} />
      <Route path="/joke" component={Joke} />
      <Route path="/got" component={GOT} />
      {/* <Weather /> */}
      {/* <Fortune /> */}
      {/* <Joke /> */}
      {/* <GOT /> */}
      </header>
    </div>
  );
}

export default App;
