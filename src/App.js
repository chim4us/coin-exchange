import HeaderID from './components/Header/Header'
import CoinList from './components/CoinList/CoinList';
import React from 'react';
//import './App.css';
import AccountBalance from './components/AccountBalance/AccountBalance';
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
      showBalance:true,
      coinData: [
        {
          //key: uuidv4(),
          name: 'BITCOIN',
          ticker: 'BTC',
          balance: 0.5,
          price: 9999.99
        },
        {
          //key: uuidv4(),
          name: 'ETHERUM',
          ticker: 'ETH',
          balance: 1.5,
          price: 299.99
        },
        {
          //key: uuidv4(),
          name: 'TETHER',
          ticker: 'USDT',
          balance: 30,
          price: 1.00
        },
        {
          //key: uuidv4(),
          name: 'RIPPLE',
          ticker: 'XRP',
          balance: 1000.5,
          price: 0.20
        }
        /*<Coin name="BITCOIN" ticker="BTC" price = {9999.99}/>
            <Coin name="ETHERUM" ticker="ETH" price = {299.99}/>
            <Coin name="TETHER" ticker="USDT" price = {1.00}/>
            <Coin name="RIPPLE" ticker="XRP" price = {0.20}/>*/
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleShowBal = this.handleShowBal.bind(this);
    
  }
  handleShowBal(){
    this.setState(function(oldState){
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  handleRefresh (changevalueTicker) {
    
    const newCoinData = this.state.coinData.map(function ( values ) {
      let newValues = { ...values };
      if(changevalueTicker === newValues.ticker){
        const ramdomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *=  ramdomPercentage;
      }

      return newValues;
      
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
        <AccountBalance amount = {this.state.balance} 
        showBalance={this.state.showBalance} 
        handleShowBal={this.handleShowBal}/>
        <CoinList handleRefresh={this.handleRefresh} showBalance={this.state.showBalance} coinData={this.state.coinData}  />
      </Div>
    );
  }
  
}

export default App;
