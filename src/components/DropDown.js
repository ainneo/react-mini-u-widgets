import React, { useState } from 'react';



const DropDown = ( {colors, selection, onSelectedChange} )=>{
    //state to toggle open or close the dropdown
    const  [open, setOpen] = useState(false)


        //helper map function - we are mapping data into UI
        const renderedOptions = colors.map((color) => {
            return(
                <div key={color.value} 
                     className="item"
                     onClick={()=> onSelectedChange(color)}
                     >
                    {color.value}
                </div>
            )
        })

    //UI
    return(
        <div className="ui form">
            <div className=" feild">
              <label className="label">Select a Color</label>
              <div 
              onClick={()=>setOpen(!open)} 
              className={`ui selection dropdown ${open ? 'visible active':''}`}
              >
              <i className="dropdown icon"></i>
                 <div className="text">{selection.label}</div>
                 <div className={`menu ${open ? 'visible transition':''}`}> { renderedOptions }</div>
              </div>

            </div>
        </div>
    )
}

export default DropDown




//notes:
//helper map function to map in data
// - data
// - selection state
// - setter - hooks setter funtion

//UI 
//passing in map variable to pass in the data...


//Orignal active classes/before removing to open and close
//I removed visible active and visible transition hiding dropdown...
            // <div className=" feild">
            //   <label className="label">Select a Color</label>
            //   <div className="ui selection dropdown visible active">
            //   <i className="dropdown icon"></i>
            //      <div className="text">{selection.label}</div>
            //      <div className="menu visible transition"> { renderedOptions }</div>
            //   </div>
            // </div>

//we want to toggle the classes and not hide them
//we can add a new pc of state to a boolean, open true, closed false
        
