import logo from './logo.svg';
import React from 'react';
import './App.css';
import Coin from './components/Coin/Coin';

let sum = 0;
for(let num of [1,2,3,4,5]) {
  sum += num;
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React Logo" className = 'App-logo'/>
        <h1 className="App-title">
          Coin Exchange {sum}
        </h1>
        
      </header>

      <table className="coin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody> 
            <Coin name="BITCOIN" ticker="BTC" price = {9999.99}/>
            <Coin name="ETHERUM" ticker="ETH" price = {299.99}/>
          </tbody>
      </table>
    </div>
  );
}

export default App;
