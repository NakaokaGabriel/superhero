import React, { useCallback, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { searchHero } from '../../store/modules/hero/actions';

import { Container } from './styles';

function Header() {
  const [heroName, setHeroName] = useState('');

  const error = useSelector(state => state.hero.error);
  const errorMessage = useSelector(state => state.hero.message);

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(searchHero(heroName));
    },
    [heroName, dispatch],
  );

  return (
    <>
      <Container error={error}>
        <form onSubmit={handleSubmit}>
          <h3>Search</h3>
          <div className="input">
            <input
              type="text"
              autoComplete="off"
              id="search"
              placeholder="Search a hero"
              onChange={e => setHeroName(e.target.value)}
              value={heroName}
            />
            <button type="submit">
              <MdSearch size={32} color="#C4C4C4" />
            </button>
          </div>
          {errorMessage && <span>{errorMessage}</span>}
        </form>
      </Container>
    </>
  );
}

export default Header;
