import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

function Header() {
  return (
    <>
      <Container>
        <h1>Heroes</h1>
        <p>Search your favorite hero</p>

        <form>
          <label htmlFor="search">Search</label>
          <div className="input">
            <input
              type="text"
              autoComplete="off"
              id="search"
              placeholder="Search a hero"
            />
            <button type="submit">
              <MdSearch size={24} color="#C4C4C4" />
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Header;
