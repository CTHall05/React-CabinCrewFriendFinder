import React from 'react';

function Header() {
  return (
    <header className="Header-Component">
      <h1>Cabin Crew Finder</h1>
      <ul className="header-ul-anchorTags">
        <a href="#crewForm">Crew Form</a>
        <a href="#searchCrew">Search Crew</a>
        <a href="#aboutUs">About</a>
      </ul>
    </header>
  );
}

export default Header;
