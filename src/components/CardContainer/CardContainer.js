import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

export default function CardContainer(props) {

const [data, setData] = useState([]);

useEffect(() => {
    axios.get('https://swapi.co/api/people')
         .then(response => setData(response.data.results))
         .catch(error => console.log("oops", error))
}, [])

console.log( "data", data);

return(
    <div className="container">
        {data.map((item) => (
        <Toast style={{backgroundColor: 'transparent'}}>
        <ToastHeader icon={<Spinner size="md"/>} tag="h3" style={{color: 'purple'}}>{item.name}</ToastHeader>
            <ToastBody>
                <p>Mass: {item.mass}</p>
                <p>Height: {item.height}</p>
            </ToastBody>
        </Toast>
        ))}
    </div>
)
}
