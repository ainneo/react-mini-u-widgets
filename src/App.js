import Accordion from './components/Accordion'
import Search from './components/Search'
import './App.css';
 

export default () => {
//this is an static array we created, it will not change over time
const questionsArr = [
  {title:'What is the questionsArr?', content:'it is a static array we created - will not change'},
  {title:'How do we pass questionsArr down as props?', content:'We add items={questionsArr} to the Accordion instance'},
  {title:'What function can we use to add props to the UI?', content:'We can use the map function'},
];

  return(
    <div>
      <br/>
      {/* <Accordion items={questionsArr}/> */}
      <Search />
    </div>
  )
}

