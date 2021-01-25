import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Convert = ( {languages, texts}) => {
    //state translated conversion
    const [translated, setTranslated] = useState('');
    //state to debounce translation
    const [debouncedText, setdebouncedText] = useState('texts')
  

    useEffect(() => {
       const translate = async () => {
           const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
           params: {
               q: debouncedText, /*texts*/
               target: languages.value,
               key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
           }
       })
       setTranslated(data.data.translations[0].translatedText)
     };
    
    //  const timeoutInput = setTimeout( () => {
    //    if(texts){
    //     translate(texts)
    //    }
    //  }, 500);
    //  //resets timer after input
    //  return ()=> {
    //    return clearTimeout(timeoutInput);
    //  };
    translate();
    }, [languages, debouncedText/*texts*/]);

    //useEffect hook for debouncing translation
    //throttel the output translation
    useEffect(() => {
        const timerId = setTimeout(()=>{
            setdebouncedText(texts)
        }, 500);
        //reset timer after input
        return () => {
            return clearTimeout(timerId)
        };
    }, [texts]);
 
    
    return(
        <div>
            {translated}
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

//checking in dev tools gives you this results in the network tabs:
// {data: {translations: [{translatedText: "hallo", detectedSourceLanguage: "en"}]}}
// data: {translations: [{translatedText: "hallo", detectedSourceLanguage: "en"}]}
// translations: [{translatedText: "hallo", detectedSourceLanguage: "en"}]
// 0: {translatedText: "hallo", detectedSourceLanguage: "en"}
//*** use this query to set the translated in the tab */
  

// Debouncing Translation Updates:
// create a debounced state - states of translation
// use that state in a second useEffect function to throttle the translation output
// use a setTimeout function and a reset timer function
// *** debounced state's init state is set to texts, so update texts to debouncedText accordinly


