import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {

	const [availablePlates, setAvailablePlates] = useState([]);
  const [workWeight, setWorkWeight] = useState(0)
  // const workWeight = useRef(null)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAvailablePlates(values => ({...values, [name]: value}))
  }

function  calculate() {

  // availablePlates.forEach(pair => {
    
  // });
  alert(availablePlates[0].name);

}



  return (
    <div>
      <form>

        <fieldset className='plates'>
          <legend>Available Plate Pairs:</legend>

            <label htmlFor="100">100</label>
              <input type="number" id="100" name="100" defaultValue={0}
              onChange={handleChange}/>

              <label htmlFor="45">45</label>
              <input type="number" id="45" name="45" defaultValue={2}/>

              <label htmlFor="35">35</label>
              <input type="number" id="35" name="35" defaultValue={0}/>

              <label htmlFor="25">25</label>
              <input type="number" id="25" name="25" defaultValue={2}/>

              <label htmlFor="15">15</label>
              <input type="number" id="15" name="15" defaultValue={1}/>

              <label htmlFor="10">10</label>
              <input type="number" id="10" name="10" defaultValue={1}/>

              <label htmlFor="5">5</label>
              <input type="number" id="5" name="5" defaultValue={1}/>

              <label htmlFor="2.5">2.5</label>
              <input type="number" id="2.5" name="2.5" defaultValue={1}/>
            
            {/* todo: add change plates later(?) */}

        </fieldset>

        <label htmlFor="weight" >Work Weight:</label>
        <input type="number" id="weight" name="weight" />

        {/* {something.map( (x) => 

        x

        )} */}

      </form>
      <button onClick={() => calculate()}>Calculate</button>

    </div>
  );
}

export default App;
