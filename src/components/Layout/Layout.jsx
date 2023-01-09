import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

export default function Layout() {
  return (
    <>
      <header>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <Container></Container>
      </footer>
    </>
  );
}
