import React, { useState } from 'react';

const Search = () => {
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" />
                </div>
            </div>
        </div>
    )
};

export default Search;

// 1. event handeler
// 2. helper function (event method)
// 3. hooks 
// 4. use setter function in helper function
