import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Search = () => {
//   //search term hook
//   const [term, setTerm] = useState('coding');
//   const [debouncedTerm, setDebouncedTerm] = useState(term);
//   //results hook - to print out to the DOM
//   //unpack data using destructing asignment in the axios call
//   //pass data into setResults
//   const [results, setResults] = useState([]);

//     //set default term w/if condtion, otherwise an error occurs
//     //if term is an empty string, do not search
//     //if term has input,  do a search
//     //wrap with setTimeout func to prevent api throtting/ use clearTimeout to reset time after keypress
//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setDebouncedTerm(term);
//     }, 1000);
//      //resets timer after input
//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [term]);

//   useEffect(() => {
//     const search = async () => {
//       const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
//         params: {
//           action: 'query',
//           list: 'search',
//           origin: '*',
//           format: 'json',
//           srsearch: debouncedTerm,
//         },
//       });

//       setResults(data.query.search);
//     };
//     search();
//   }, [debouncedTerm]);


//   const renderedResults = results.map((result) => {
//     return (
//       <div key={result.pageid} className="item">
//         <div className="right floated content">
//           <a
//             className="ui button"
//             href={`https://en.wikipedia.org?curid=${result.pageid}`}
//           >
//             Go
//           </a>
//         </div>
//         <div className="content">
//           <div className="header">{result.title}</div>
//           <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <div className="ui form">
//         <div className="field">
//           <label>Enter Search Term</label>
//           <input
//             value={term}
//             onChange={(e) => setTerm(e.target.value)}
//             className="input"
//           />
//         </div>
//       </div>
//       <div className="ui celled list">{renderedResults}</div>
//     </div>
//   );
// };

// export default Search;


//Step 1
// 1. event handeler
// 2. helper function (event method)
// 3. hooks 
// 4. use setter function in helper function


//Step 2
//Add code to search term and make a request to the api
//RECAP:
// - user types input
// - onChange event handler is called
// - update term state
// - component renders

//This is where we use useEffect:
// - we add code to detect 'term' has changed 
// - make request to api - install axios via CLI
//*** Whats happening?
// useEffect will make an api call everytime [term] is updated
// - you cannot start a useEffect function param with async - you will have to wrap it with a normal function
   //- 3 ways to make the api call from inside your wrapper:
   //1. function expression  and call the function - const search = async()=>{await axios.get()}; search()
   //2. (IIFE) Immediately Invoked Function Expressions - (async()=>{await axios.get();})();
   //3. instead of async use promises - axios.get().then((response)=>{})

//add base URL, (root end point) 
//take key value pairs(eg: action=query, list=search) and write them into the params object
//for more: https://www.mediawiki.org/wiki/API:Main_page
// orignal http: https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming


// <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
// get rid of span tags inside objects that display on the DOM
// make sure there is no space tag between the span tags... or you will get an error message
// PROBLEM IS it can be hacked - SO DO NOT USE



//API Throtting
//prevent an api request each time the user key presses in the input box
//use the setTimeout and clearTimeout functions to set and reset time after inputs

//wrap the search function with a setTimeout function

//Process of  setTimeout
// input- set timer to search 500ms
// input- cancel previous timer
// input- set timer to search 500ms
// input- cancel previous timer
// no changes- last timer excutes

