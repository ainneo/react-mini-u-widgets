import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Convert = ( {languages, texts}) => {

    useEffect(() => {
       axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
           params: {
               q: texts,
               target: languages.value,
               key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
           }
       })
    }, [languages, texts]);
 

    return(
        <div>
            conversion here
        </div>
    )
}

export default Convert


//Notes:
// Convert component needs to receive two props
// 1. text prop
// 2. langage prop


//We use the useEffect function to make a request each time
//language or text updates....
//we add the language and text to the dependency array in useEffect
//so it will update each time the state changes.