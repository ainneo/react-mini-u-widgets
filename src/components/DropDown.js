import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;


// import React, { useState, useEffect, useRef } from 'react';


// const Dropdown = ({ label, options,  selected, onSelectedChange }) => {

//   //state - open and close drop down
//   const [open, setOpen] = useState(false);
//   //state to help with closing dropdown when clicking on the DOM
//   const ref = useRef();
 
//   //closing the dropdown when click outside of drop down
//   //we use useEffect when creating side efffects... like DOM muniplation
//   useEffect(() => {
  
//     const onBodyClick = (e) => {
//       if (ref.current.contains(e.target)) {
//         return 
//       }
//       setOpen(false);
//     };

//     document.body.addEventListener('click', onBodyClick);

//     return () => {
//       document.body.removeEventListener('click', onBodyClick);
//     }

//   }, []);

//  //mapping data into UI
//   const renderedOptions = options.map((option) => {
//     if (option.value ===  selected.value) {
//       return null;
//     }

//     return (
//       <div
//         key={option.value}
//         className="item"
//         onClick={() => onSelectedChange(option)}
//       >
//         {option.label}
//       </div>
//     );
//   });

//  // main UI component
//   return (
//     <div className="ui container">
//     <div ref={ref} className="ui form">
//       <div className="field">
//         <label className="label">{label}</label>
//         <div
//           onClick={() => setOpen(!open)}
//           className={`ui selection dropdown ${open ? 'visible active' : ''}`}
//         >
//           <i className="dropdown icon"></i>
//           <div className="text">{ selected.label}</div>
//           <div className={`menu ${open ? 'visible transition' : ''}`}>
//             {renderedOptions}
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Dropdown;



// //UI 
// //passing in map variable to pass in the data...  {renderedOptions}

// //Event Bubbeling:
// //We have 3 events, 1 listner and 2 handelers
// //**** trickey **** All eventlisterners will get called before the event handelers no matter where they are
// //useRef helps solver this problem, see how it is use above

// //Logic:
// //1. on click open drop down - open state
// //2. on click select from menu - selection state
// //2a selection appear on label - selection state
// //2b drop down to close after the selection - selction state
// //PART TWO:
// //3. click outside menu and close dropdown - event listner, DOM, useEffect, useRef, open state
        
