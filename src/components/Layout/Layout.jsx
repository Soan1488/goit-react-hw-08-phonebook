import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
// import { Skeleton } from '@mui/material';

import css from './Layout.module.css';

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
          <Suspense fallback={<></>}>
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
