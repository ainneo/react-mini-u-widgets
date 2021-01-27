import React from 'react';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
          <a href="/accordion" className="item">
            accordion
          </a>
          <a href="/search" className="item">
            search
          </a>
          <a href="/translator" className="item">
            translator
          </a>
          <a href="/dropdown" className="item">
            dropdown
          </a>
        </div>
    );
};

export default Header;