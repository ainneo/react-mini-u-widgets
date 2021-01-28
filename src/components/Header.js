import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;



//Notes on the nav fix:
 //Create an onClick nav event link
 //when clicked, event will be sent to all routes
 //when each route receives the event, routes will know URL has changed
 //routes will check URL and only show the URL that matches the clicked link
 //create Link component -- see Link notes for more deets