import './App.css';
import {useState, useEffect} from 'react';
import Data from './Data.jsx';
function App() {
  const [values, setValues] = useState([]);
  const fetchData = async ()=>{
    const response = await fetch(`https://swapi.dev/api/planets/?format=json`);
    const data = await response.json();
    setValues(data["results"]);
  }
  window.addEventListener("load", fetchData);
  return (
    <div className="container">
      <h2 className='rounded-5 shadow-lg m-5 text-warning'>STAR WARS PLANETS DIRECTORY</h2>
      {
        values.map(value=>(
          <Data name={value.name} rotation={value.rotation_period} climate={value.climate} gravity={value.gravity} water={value.surface_water} terrain={value.terrain} diameter={value.diameter} residents={value.residents} />
        ))
      }
    </div>
  );
}

export default App;
