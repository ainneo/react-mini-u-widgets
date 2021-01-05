import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
    };

    search();
  }, [term]);

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
    </div>
  );
};

export default Search;


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


