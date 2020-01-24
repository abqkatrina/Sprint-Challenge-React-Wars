
import React, {useState} from "react";
import App from "../../App";
import {styled} from "styled-components";


export const Footer = styled.footer`
background-color: brown;
color: white;
display: flex;
flex-direction: row;
`;

export default Footer = props => {

console.log("Footer works", props);

return (
    <Footer>
        <p>This is the footer.</p>
    </Footer>
);
}

