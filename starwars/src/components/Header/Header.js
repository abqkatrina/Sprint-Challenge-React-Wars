
import React, {useState} from "react";
import App from "../../App";
import { styled} from "styled-components";


const header = styled.header`
background-color: brown;
color: white;
display: flex;
flex-direction: row;
`;

const Header = props => {

  const [person, setPerson] = useState([]);
  
//   useEffect(() => {
    
//     axios.get("https://swapi.co/api/people/")

//     .then(response => {
//       console.log("app works", response);
//       setPerson(response.data);
//     })

//     .catch(error => {
//       console.log("oops, ", error);
//     })
    
//   }, []);

  

return (
  <header>
      <img/>
      <h2>React Wars -- Character API</h2>
  </header>
);
}

export default Header;