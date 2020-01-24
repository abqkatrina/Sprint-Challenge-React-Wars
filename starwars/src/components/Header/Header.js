
import React, {useState} from "react";
import App from "../../App";
import {styled} from "styled-components";


export const Header = styled.header`
background-color: brown;
color: white;
display: flex;
flex-direction: row;
`;

export default Header = props => {
  
    return (
    <Header>
        <img/>
        <h2>React Wars -- Character API</h2>
    </Header>
    );
}
