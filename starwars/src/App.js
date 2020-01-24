
import React, {useState, useEffect} from "react";
import axios from "axios";
import Content from "./components/Content/Content.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js"

function App() {

  const [person, setPerson] = useState([]);
  
  useEffect(() => {
    
    axios.get("https://swapi.co/api/people/")

    .then(response => {
      console.log("app works", response);
      setPerson(response.data);
    })

    .catch(error => {
      console.log("oops, ", error);
    })
    
  }, []);

  

return (
  <div className="App">
  
   
    <Header/>
    <Content props={props}/>
    <Footer name={person.name}/>

  </div>
);
}

export default App;