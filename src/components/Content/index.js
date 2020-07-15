import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import {
  searchHeroError,
  searchHeroById,
} from '../../store/modules/hero/actions';

import api from '../../services/api';

import { Container, Heroes, Description } from './styles';
import Modal from '../Modal';

function Content() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const heroName = useSelector(state => state.hero.name);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadHeroes() {
      const response = await api.get(`/search/${heroName || 'all'}`);

      if (response.data.response === 'error') {
        dispatch(searchHeroError(response.data.error));
        return;
      }

      const data = [...response.data.results];

      setLoading(false);
      setHeroes(data);
    }

    loadHeroes();
  }, [heroName, dispatch]);

  useLayoutEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  const handleModal = useCallback(
    id => {
      setModal(true);
      dispatch(searchHeroById(id));
    },
    [dispatch],
  );

  return (
    <>
      <Container>
        {loading && (
          <div className="loading">
            <AiOutlineLoading3Quarters size={32} color="#474c5f" />
          </div>
        )}
        {heroes.map(hero => (
          <Heroes key={hero.id} onClick={() => handleModal(hero.id)}>
            <img src={hero.image.url} alt={hero.name} />

            <Description>
              <h2>{hero.name}</h2>

              <div className="race">
                <h4>Race</h4>
                <span>{hero.appearance.race}</span>
              </div>
            </Description>
          </Heroes>
        ))}
        {modal && <Modal openModal={modal} setModal={setModal} />}
      </Container>
    </>
  );
}

export default Content;
