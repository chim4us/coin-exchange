
import React from 'react';
import HeaderID from './components/Header/Header'
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    background-color: rgb(2, 2, 70);
    color: #cccccc;
`;



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          key: uuidv4(),
          name: 'BITCOIN',
          ticker: 'BTC',
          price: 9999.99
        },
        {
          key: uuidv4(),
          name: 'ETHERUM',
          ticker: 'ETH',
          price: 299.99
        },
        {
          key: uuidv4(),
          name: 'TETHER',
          ticker: 'USDT',
          price: 1.00
        },
        {
          key: uuidv4(),
          name: 'RIPPLE',
          ticker: 'XRP',
          price: 0.20
        }
        /*<Coin name="BITCOIN" ticker="BTC" price = {9999.99}/>
            <Coin name="ETHERUM" ticker="ETH" price = {299.99}/>
            <Coin name="TETHER" ticker="USDT" price = {1.00}/>
            <Coin name="RIPPLE" ticker="XRP" price = {0.20}/>*/
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh (changevalueTicker) {
    
    const newCoinData = this.state.coinData.map(function ({ticker,name,price,key}) {
      let newPrice = price;
      if(changevalueTicker === ticker){
        const ramdomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * ramdomPercentage;
      }

      return{
        key,
        name,
        ticker,
        price: newPrice
      }
    });
    //console.log(newCoinData);
    this.setState(      
      {coinData : newCoinData}
      );
  }

  render(){
    
    return (
      <Div className="App">
        <HeaderID/>
        <AccountBalance amount = {this.state.balance} />
        <CoinList handleRefresh={this.handleRefresh} coinData={this.state.coinData}  />
      </Div>
    );
  }
  
}

export default App;
