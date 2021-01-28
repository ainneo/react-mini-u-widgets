import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};



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

