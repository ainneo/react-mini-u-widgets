import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;





// import React from 'react'

// const Link = ( {className, href, children} ) => {

//    const onClick = (event) =>{
//      event.preventDefault(); //prevents normal behavior of the browser which is a full page reload
//      window.history.pushState({}, '', href)//onClick the URLs now update
//      //navEvent communicates to the routes that the URL has just changed
//      const navEvent = new PopStateEvent('popstate');
//      window.dispatchEvent(navEvent)
//      //now go to Route and set up the event handeler (useEffect Function)
//     };

//     return (
//     <a onClick={onClick} className={className} href={href}>
//         {children}
//     </a>
//     )
// };

// export default Link




//Notes:
//It is important to keep the URL and the content on the screen insync
//In order to change the URL, but don't do a full page reload we have to build a
//function that works directly with the browser

//In the console: window.history.pushState()
  //window.history.pushState({}, '', '/translate) - this changes the URL
//Use this function in the onClick method
  //window.history.pushState({}, '', href) - instead path file name, use href prop


//We created this Link component to prevent page reloading 
//each time a header link is clicked
//we replaced all the <a> tags in Header with the Link component.
//This is what Header looks like before we replace <a> tags with Link instances

// const Header = () => {
//     return (
//         <div className="ui secondary pointing menu">
//           <a href="/accordion" className="item">
//             accordion
//           </a>
//           <a href="/search" className="item">
//             search
//           </a>
//           <a href="/translator" className="item">
//             translator
//           </a>
//           <a href="/dropdown" className="item">
//             dropdown
//           </a>
//         </div>
//     );
// };

// export default Header;

