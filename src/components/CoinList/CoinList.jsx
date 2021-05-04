import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default class  extends Component {
    render() {
        return (
            <Table className="coin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                {this.props.showBalance? <th>Balance</th> : null}
                <th>Action</th>
              </tr>
            </thead>
            <tbody> 
              {
                this.props.coinData.map(value => 
                <Coin key={value.ticker} handleRefresh = {this.props.handleRefresh} 
                name={value.name} ticker={value.ticker} showBalance={this.props.showBalance} balance={value.balance} price={value.price}/>)
              }
              
            </tbody>
        </Table>
        )
    }
}
