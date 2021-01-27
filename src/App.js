import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translator from './components/Translator';
import Route from './components/Route';
import Header from './components/Header';
import './App.css';
import React, { useState } from 'react';
 

const App = _=> {
// questions array
const questionsArr = [
  {title:'What is the questionsArr?', content:'it is a static array we created - will not change'},
  {title:'How do we pass questionsArr down as props?', content:'We add items={questionsArr} to the Accordion instance'},
  {title:'What function can we use to add props to the UI?', content:'We can use the map function'},
];

//color array
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

//color state to show the selection in the label
const [selected, setSelected] = useState(options[0]);

  return(
    <div>
      <Header />
      <Route path="/accordion"><Accordion items={questionsArr}/></Route>
      <Route path="/dropdown">
        <DropDown
         label= "select a color"
         selected={selected}
         onSelectedChange={setSelected}
         options={options}/>
      </Route>
      <Route path="/translator"><Translator /></Route>
      <Route path="/search"><Search /></Route>
    </div>
  )
}

export default App


//Notes:

//Basic component rounting:
//Below is an what components routing looked like before we decided to
//build a route component

// const showAccordion = () => {
//   if(window.location.pathname === '/accordion') {
//     return <Accordion items={questionsArr}/>;
//   }
// };

// const showDropdown = () => {
//   if(window.location.pathname === '/dropdown'){
//     return  <DropDown
//     selected={selected}
//     onSelectedChange={setSelected}
//     options={options}
//   />
//   }
// };

// const showTranslate = () =>{
//   if(window.location.pathname === '/translator'){
//      return   <Translator />
//   }
// };

// const showSearch = () =>{
//   if(window.location.pathname === '/search'){
//      return   <Search />
//   }
// };

