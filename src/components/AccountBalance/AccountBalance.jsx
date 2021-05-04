import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;



export default class AccountBalance extends Component {
    constructor(props){
        super(props);
        this.state = {
            showBalance : this.props.showBalance 
        }
        //this.handleClick = this.handleClick.bind(this);
        //this.props.handleShowBal = this.props.handleShowBal.bind(this);
        this.BalClick = this.BalClick.bind(this);
    }

    BalClick(event){
        event.preventDefault();

        //const buttonText= this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        this.props.handleShowBal();

        /*if(this.props.showBalance){
            //balance: 10000
            this.state.showBalance = false;
            console.log("True");
            this.setState(
                function(oldState){
                    return{
                        showBalance: false
                    };
                }
            );
            console.log(this.props.showBalance );

        }else{
            ///balance: xxx
        }*/
        
    }
    render() { 
        const buttonText= this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        let balanceDisplay = this.props.showBalance ? <>Balance: $ {this.props.amount} </> : "";
        
        return (
            <Section >
            {balanceDisplay}
            
        <button onClick={this.props.handleShowBal} >{buttonText}</button>
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}