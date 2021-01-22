import React, { useState } from 'react';


const Accordion = ({ items }) => {
    //state hooks
    const [activeIndex, setActiveIndex] = useState(null);

    //helper - toggle function
    //if activeindex strict equal to an index set it null else set it to index
    const onTitleClick = (index) => {
        // console.log('click', index)//test
        // setActiveIndex(index)
        setActiveIndex(activeIndex === index ? null : index);
    };


    //mapping data into UI
    const renderedItems = items.map((item, index) => {
        //if index is equal to the activeIndex, then open that index else return empty string
        //opens answers
        const open = index === activeIndex? 'active' : '';

        return (
            <React.Fragment key={index}>
                <div className="title" onClick={_ => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${open}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });

    //JSX render
    return <div className="ui styled accordion">
        {renderedItems}
        </div>
}

export default Accordion


//**** how to toggle - open and close
//onClick sets off index to go to two places...
//toggle funtion - sets all indexes to close (null)
//map function's open condtion variable - keeps the slected function active and open

//*** Notes

// used React.Fragment instead of div - in sematic UI if there is a div, it applys extra border line

//*** Event Handlers:
// add onClick handeler to title question
// add helper function - the onClick method
// **on the onClick handler we keep arrow function to return helper(method)
// **otherwise it would render as soon as the page reloads
// **so do not use onClick={onTitleClick(index)}
// **use  onClick={ _=> onTitleClick(index)}
// This is a good example of function wrappers, learned about with Tenzin...keep you functions bug free with wrappers

//**Setter Functions:
//the second argument inside of UseState is setActiveIndex which is the setter function
//call setter function inside helper function(click method) to set the activeIndex variable

//state is data that changes over time - in this case our activeIndex

//How to expand the accordion:
//Since we are using semantic UI's active class, we dont need to write additional css.
//Active class will turn on and off css to show and hide the answers - just like in a static html/js site
//When we first started, active is on, then we can remove the class and dynamically create a function