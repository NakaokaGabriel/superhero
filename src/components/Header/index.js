import React from 'react';
import { MdSearch } from 'react-icons/md';

// import { Container } from './styles';

function Header() {
  return (
    <>
      <h1>Heroes</h1>
      <p>Search your favorite hero</p>

      <form>
        <label htmlFor="search">Search</label>
        <div className="input">
          <input type="text" id="search" placeholder="Search a hero" />
          <button type="submit">
            <MdSearch />
          </button>
        </div>
      </form>
    </>
  );
}

export default Header;
