import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TDR = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {
            price : this.props.price 
        }
        this.handleClick = this.handleClick.bind(this);
    }

    /*
    componentDidMount(){
        const callback = () => {
            const ramdomPercentage = 0.995 + Math.random() * 0.01;
            this.setState(
                function(oldState){
                    return{
                        price: oldState.price * ramdomPercentage
                    };
                }
            );
        }
        
        setInterval(callback, 1000);
    }
    */

    handleClick(event){
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker);
        /*
        const ramdomPercentage = 0.995 + Math.random() * 0.01;
            this.setState(
                function(oldState){
                    return{
                        price: oldState.price * ramdomPercentage
                    };
                }
            );*/
    }

    render() {
        return(
            <tr className="coin-row">
                <TDR>{this.props.name}</TDR>
                <TDR>{this.props.ticker}</TDR>
                <TDR>${this.props.price}</TDR>
                {this.props.showBalance? <TDR>${this.props.balance}</TDR> : null}
                <TDR>
                    <form>
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </TDR>
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}