import React from 'react';

import { Container, Heroes, Description } from './styles';

import hero from '../../assets/hero.png';

function Content() {
  return (
    <Container>
      <h3>Search result: Batman</h3>

      <Heroes>
        <img src={hero} alt="hero" />

        <Description>
          <h2>Batman</h2>

          <div className="stats">
            <h4>Stats</h4>
            <ul>
              <li>intelligence</li>
              <li>strength</li>
              <li>speed</li>
              <li>durability</li>
              <li>power</li>
            </ul>
          </div>

          <div className="race">
            <h4>Race</h4>
            <span>Human</span>
          </div>
        </Description>
      </Heroes>
    </Container>
  );
}

export default Content;
