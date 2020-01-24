import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Components/Card/Card";
import styled from "styled-components";


export const Container = styled.div`
    background-color: brown;
    color: white;
    display: flex;
    flex-direction: column;
`;

export default function Content() {

    const [person, setPerson] = useState([]);
  
    useEffect(() => {
      
      axios.get("https://swapi.co/api/people/")
  
      .then(response => {
        console.log("App works", response);
        const character = response.data;
        setPerson(character);
      })
  
      .catch(error => {
        console.log("oops, ", error);
      })
      
    }, []);
  
    console.log("Content works", props);
  

    return (
    <Container>
        <div className="entry">
            {person.map(item =>{
            return <Card key={item} name={character.name}/>;
            })}
        </div>
    </Container>
    );
}
