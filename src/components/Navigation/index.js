import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Famous } from './styles';

function Header() {
  return (
    <>
      <Container>
        <form>
          <h3>Search</h3>
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
        <Famous>
          <h3>Some heroes</h3>
          <div className="heroes">
            <button type="button">
              <img
                src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                alt="alguem"
              />
            </button>
            <button type="button">
              <img
                src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                alt="alguem"
              />
            </button>
            <button type="button">
              <img
                src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                alt="alguem"
              />
            </button>
            <button type="button">
              <img
                src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                alt="alguem"
              />
            </button>
            <button type="button">
              <img
                src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                alt="alguem"
              />
            </button>
            <button type="button">
              <img
                src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                alt="alguem"
              />
            </button>
          </div>
        </Famous>
      </Container>
    </>
  );
}

export default Header;
