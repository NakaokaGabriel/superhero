import React, { useRef, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import api from '../../services/api';

import { Wrapper, Container, Close } from './styles';

function Modal({ openModal, setModal, heroId }) {
  const modalContent = useRef(null);

  const [heroInfo, setHeroInfo] = useState({});

  useEffect(() => {
    async function loadHero() {
      const response = await api.get(`/${heroId}`);

      const data = {
        name: response.data.name,

        image: response.data.image.url,

        aliases: response.data.biography.aliases,
        alignment: response.data.biography.alignment,
        egos: response.data.biography['alter-egos'],
        appearance: response.data.biography['first-appearance'],
        fullname: response.data.biography['full-name'],
        birth: response.data.biography['place-of-birth'],
        publisher: response.data.biography.publisher,

        combat: response.data.powerstats.combat,
        durability: response.data.powerstats.durability,
        intelligence: response.data.powerstats.intelligence,
        power: response.data.powerstats.power,
        speed: response.data.powerstats.speed,
        strength: response.data.powerstats.strength,

        eye: response.data.appearance['eye-color'],
        hair: response.data.appearance['hair-color'],
        gender: response.data.appearance.gender,
        height: response.data.appearance.height,
        race: response.data.appearance.race,
        weight: response.data.appearance.weight,

        group: response.data.connections['group-affiliation'],
        relatives: response.data.connections.relatives,

        base: response.data.work.base,
        occupation: response.data.work.occupation,
      };

      setHeroInfo(data);
    }

    loadHero();
  }, [heroId]);

  const handleModal = useCallback(
    e => {
      if (!modalContent.current.contains(e.target)) {
        setModal(false);
      }
    },
    [setModal],
  );

  return (
    <Wrapper modal={openModal} onClick={handleModal}>
      <Container ref={modalContent}>
        <img src={heroInfo.image} alt="Hulk" />
        <div className="content">
          <h3>{heroInfo.name}</h3>

          <h4>Biography</h4>
          <ul>
            <li>Full name: {heroInfo.fullname}</li>
            <li>Aliases: {heroInfo.aliases}</li>
            <li>Alignment: {heroInfo.alignment}</li>
            <li>Alter egos: {heroInfo.egos}</li>
            <li>First appearance: {heroInfo.appearance}</li>
            <li>Place of birth: {heroInfo.birth}</li>
            <li>Publisher: {heroInfo.publisher}</li>
          </ul>

          <h4>Power Stats</h4>
          <ul>
            <li>Combat: {heroInfo.combat}</li>
            <li>Durability: {heroInfo.durability}</li>
            <li>Intelligence: {heroInfo.intelligence}</li>
            <li>Power: {heroInfo.power}</li>
            <li>Speed: {heroInfo.speed}</li>
            <li>Strength: {heroInfo.strength}</li>
          </ul>

          <h4>Appearance</h4>
          <ul>
            <li>Eye color: {heroInfo.eye}</li>
            <li>Gender: {heroInfo.gender}</li>
            <li>Hair color: {heroInfo.hair}</li>
            <li>Height: {heroInfo.height}</li>
            <li>Race: {heroInfo.race}</li>
            <li>Weight: {heroInfo.weight}</li>
          </ul>

          <h4>Connections</h4>
          <ul>
            <li>Group affiliation: {heroInfo.group}</li>
            <li>Relatives: {heroInfo.relatives}</li>
          </ul>

          <h4>Work</h4>
          <ul>
            <li>Base: {heroInfo.base}</li>
            <li>Occupation: {heroInfo.occupation}</li>
          </ul>
        </div>
      </Container>
      <Close>
        <MdClose size={22} color="#fbfcfc" />
      </Close>
    </Wrapper>
  );
}

Modal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  heroId: PropTypes.string,
};

Modal.defaultProps = {
  heroId: '',
};

export default Modal;
