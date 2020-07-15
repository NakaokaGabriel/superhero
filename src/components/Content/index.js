import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import api from '../../services/api';

import { Container, Heroes, Description } from './styles';
import Modal from '../Modal';

function Content() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [heroId, setHeroId] = useState('');

  useEffect(() => {
    async function loadHeroes() {
      try {
        const response = await api.get(`/search/batman`);

        const data = [...response.data.results];

        setLoading(false);
        setHeroes(data);
      } catch (err) {
        setLoading(true);
      }
    }

    loadHeroes();
  }, []);

  useLayoutEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  const handleModal = useCallback(id => {
    setModal(true);
    setHeroId(id);
  }, []);

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
            <img src={hero.image.url} alt="hero" />

            <Description>
              <h2>{hero.name}</h2>

              <div className="race">
                <h4>Race</h4>
                <span>{hero.appearance.race}</span>
              </div>
            </Description>
          </Heroes>
        ))}
        {modal && (
          <Modal openModal={modal} setModal={setModal} heroId={heroId} />
        )}
      </Container>
    </>
  );
}

export default Content;
