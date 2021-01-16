import Accordion from './components/Accordion'
import Search from './components/Search'
import DropDown from './components/DropDown'
import './App.css';
import React, { useState } from 'react';
 

const App = _=> {
// this is an static array we created, it will not change over time
const questionsArr = [
  {title:'What is the questionsArr?', content:'it is a static array we created - will not change'},
  {title:'How do we pass questionsArr down as props?', content:'We add items={questionsArr} to the Accordion instance'},
  {title:'What function can we use to add props to the UI?', content:'We can use the map function'},
];
const questionsArr2 = [
  {title:'test?', content:'it is a static array we created - will not change'},
  {title:'test?', content:'We add items={questionsArr} to the Accordion instance'},
  {title:'test', content:'We can use the map function'},
];

//color data
const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },  
  {
    label: 'The Color Green',
    value: 'green'
  }
];

//our state
const [selected, setSelected] = useState(options[0]);

  return(
    <div>
      <br/>
      <Accordion items={questionsArr}/>
      <Accordion items={questionsArr2}/>
      <Search />
      <Search />
      <DropDown 
      colors={options} 
      selection={selected}
      onSelectedChange={setSelected}
      />
  
    </div>
  )
}

export default App



//note:
//we put selection state in the App component bc,
//incase we wanted to have muiltple instances of DD component bd
//the app might want to now what is selected in each component
