import React, {useState, useEffect} from "react";
import "./card.css";
import styled from "styled-components";


export const cardBox = styled.div`
    position: relative;
    transition: transform 0.2s ease-in;
    background: #99f3eb;
    color: black;
    width: 200px;
    max-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 10px 5px 20px;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;
    overflow: hidden;
`;

export const Character = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
  filter: grayscale(1) blur(1px);
  transform-origin: center center;
  transform: scale(0.8);
`;

export const Data = props = {
    Name=`${props.name}`,
    Homeworld=`${props.homeworld}`,
    Species=`${props.species}`,
    Films=`${props.films}`
};


export default Card = props => {

    const [person, setPerson] = useState([]);
    
    console.log("Content works", props);
  

    return (
    <cardBox className="entry" key={props.id}>
       <Character alt={props.name} src={Array.id}/>
       <Data/>
    </cardBox>
    );
}
