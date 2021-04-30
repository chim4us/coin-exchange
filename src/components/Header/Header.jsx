import React, { Component } from 'react';
import logo, { ReactComponent } from '../../logo.svg';
import styled from 'styled-components';

const HeaderH = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 36px;
    color: white;
`;

const H1 = styled.h1`
    font-size: 4rem;
`;

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;
  
  /*@media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }*/
  
  /*.App-link {
    color: #61dafb;
  }
  */
  

export default class Header extends Component {
    render() {
        return (
            <HeaderH className="App-header">
                <Img src={logo} alt="React Logo" className = 'App-logo'/>
                <H1 className="App-title">
                    Coin Exchange
                </H1>
            </HeaderH>
        )
    }
}
