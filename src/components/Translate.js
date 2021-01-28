import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;




// import React, { useState } from 'react';
// import Dropdown from './Dropdown';
// import Convert from './Convert';

// const options = [
//   {
//     label: 'Afrikaans',
//     value: 'af',
//   },
//   {
//     label: 'Arabic',
//     value: 'ar',
//   },
//   {
//     label: 'Hindi',
//     value: 'hi',
//   },
//   {
//     label: 'Dutch',
//     value: 'nl',
//   },
// ];

// const Translator = () => {
//   const [language, setLanguage] = useState(options[0]);
//   const [text, setText] = useState('');

//   return (
//     <div>
//       <div className="ui form">
//         <div className="field">
//           <label>Enter Text</label>
//           <input value={text} onChange={(e) => setText(e.target.value)} />
//         </div>
//       </div>
//       <Dropdown
//         label="Select a Language"
//         selected={language}
//         onSelectedChange={setLanguage}
//         options={options}
//       />
//       <hr />
//       <h3 className="ui header">Output</h3>
//       <Convert text={text} language={language} />
//     </div>
//   );
// };



// export default Translator


// Notes:
//Structure:
// App component
// Translate component - options: language, setLanguage
  // dropdown component -reuse 
  // convert component - create new component
  // input: text to translate
  // output: translation
  
//Google Translate API key, only works on localhost, will not work anywhere else
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
//https://cloud.google.com/translate/docs/reference/rest/v2/translate#query-parameters
//we are making an axios post request, so the second argument is always info to send in the
//body, but if you look at the api documentation it says that we should provide query string
//parameters.
//** even tho we are making a post request we are not sending anything in the body,
//** you can with this API but it is not very well documented
//** the 1st {} is empty bc we do not want to send anything in the body request
//** we  add a third argument {} which will have all of our query string params
//** see more: https://cloud.google.com/translate/docs/reference/rest/v2/translate#query-parameters
