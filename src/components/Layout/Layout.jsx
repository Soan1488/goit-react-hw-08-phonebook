import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

import css from './Layout.module.css';

export const override = {
  display: 'block',
  margin: '0 auto',
};

export default function Layout() {
  return (
    <>
      <header className={css.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Container>
          <Suspense
            fallback={
              <ClipLoader
                color={css.color}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={override}
              />
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer>
        <Container></Container>
      </footer>
    </>
  );
}
