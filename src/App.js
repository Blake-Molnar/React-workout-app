import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {

	const [availablePlates, setAvailablePlates] = useState([]);
  // todo: add set barweight function
  const [barWeight, setBarWeight] = useState(45);
  const [calculateOutput, setCalculateOutput] = useState("")
  const workWeight = useRef(null)
  const hundreds = useRef(null)
  const fortyFives = useRef(null)
  const thirtyFives = useRef(null)
  const twentyFives = useRef(null)
  const fifteens = useRef(null)
  const tens = useRef(null)
  const fives = useRef(null)
  const twoAndAHalf = useRef(null)
  const [count, setCount] = useState(0);

  const setPlates = () => {
    setAvailablePlates([])
    setAvailablePlates(availablePlates => ([...availablePlates, { weight: 100, value: hundreds.current.value }]))
    setAvailablePlates(availablePlates => ([...availablePlates, { weight: 45, value: fortyFives.current.value}]))
    setAvailablePlates(availablePlates => ([...availablePlates, { weight: 35, value: thirtyFives.current.value}]))
    setAvailablePlates(availablePlates => ([...availablePlates, { weight: 25, value: twentyFives.current.value}]))
    setAvailablePlates(availablePlates => ([...availablePlates, { weight: 15, value: fifteens.current.value}]))
    setAvailablePlates(availablePlates => ([...availablePlates, { weight: 10, value: tens.current.value}]))
    setAvailablePlates(availablePlates => ([...availablePlates, { weight: 5, value: fives.current.value}]))
    setAvailablePlates(availablePlates => ([...availablePlates, { weight: 2.5, value: twoAndAHalf.current.value}]))
    setCount(count + 1)
  }

function calculate(e){
  e.preventDefault()
  if(workWeight.current.value == 0)
  {
    setCalculateOutput("Please input a work weight")
  }
  else{
  setPlates()
  }
  
}
  /// this whole useEffect that only calls when the count is incremented is kinda hacky but idk how to make it work otherwise
  useEffect(() => {

    setCalculateOutput("")


    let weight = workWeight.current.value - barWeight
  
    availablePlates.map( (pair) =>
    {
      
      if(pair.value > 0 && weight > 0)
      {
        let numOfPairs = 0
  
        for (let i = 1; i <= pair.value; i++) {
  
          if(weight - (pair.weight * 2) >= 0)
          {
            weight = weight - (pair.weight * 2)
            numOfPairs = i
          }
  
        }

        if(numOfPairs != 0)
        {
          setCalculateOutput(calculateOutput => calculateOutput + `${numOfPairs  > 1 ? numOfPairs + "x" : ""}${pair.weight} \n`)
        }
      }
      
  })
  
  if(weight > 0)
  {
    setCalculateOutput(calculateOutput => calculateOutput +` with a remainder of ${weight}lb`)
  }


  },[count]);
  
  return (
    <div>
      <form>

        <fieldset className='plates'>
          <legend>Available Plate Pairs:</legend>

            <label htmlFor="100">100</label>
              <input type="number" id="100" name="100" defaultValue={0} ref={hundreds} min="0"/>

              <label htmlFor="45">45</label>
              <input type="number" id="45" name="45" defaultValue={2} ref={fortyFives} min="0"/>

              <label htmlFor="35">35</label>
              <input type="number" id="35" name="35" defaultValue={0} ref={thirtyFives} min="0"/>

              <label htmlFor="25">25</label>
              <input type="number" id="25" name="25" defaultValue={2} ref={twentyFives} min="0"/>

              <label htmlFor="15">15</label>
              <input type="number" id="15" name="15" defaultValue={1} ref={fifteens} min="0"/>

              <label htmlFor="10">10</label>
              <input type="number" id="10" name="10" defaultValue={1} ref={tens} min="0"/>

              <label htmlFor="5">5</label>
              <input type="number" id="5" name="5" defaultValue={1} ref={fives} min="0"/>

              <label htmlFor="2.5">2.5</label>
              <input type="number" id="2.5" name="2.5" defaultValue={1} ref={twoAndAHalf}/>
            
            {/* todo: add change plates later(?) */}

        </fieldset>

        <label htmlFor="weight" >Work Weight:</label>
        <input type="number" id="weight" name="weight" ref={workWeight}/>
        <button onClick={calculate}>Calculate</button>

        <b>
          {calculateOutput}
        </b>

      </form>

    </div>
    
  );
}

export default App;
