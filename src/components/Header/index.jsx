import { useNavigate } from 'react-router-dom';

import LogoImage from '../../assets/Logo.svg';
import ArrowBackImage from '../../assets/arrowBack.svg';

import styles from './styles.module.scss';

export function Header({ isHome = true }) {
  const navigate = useNavigate();

  return (
    <div className={ styles.HeaderContainer }>
      {
        isHome
        ? (
          <img src={ LogoImage } alt="Github explorer" />
        )
        : (
          <>
            <img src={ LogoImage } alt="Github explorer" />
            <div className={ styles.LinkContainer } onClick={ () => navigate('/')}>
              <img src={ ArrowBackImage } alt="Seta para voltar" />
              <p data-testid='goBack'>Voltar</p>
            </div>
          </>
        )
      }
    </div>
  );
}
