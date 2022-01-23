import { Header } from '../../components/Header';

import styles from './styles.module.scss';

export function NoMatch() {
  return (
    <div className={ styles.NoMatchContainer }>
      <Header isHome={ false } />
      <main className={ styles.MainContainer}>
        <h1>404</h1>
        <h2>Usuário não encontrado</h2>
      </main>
    </div>
    );
}
