import { NavLink, Route, Routes } from 'react-router-dom';
import { StyledContainer } from 'Styles/Container.styled';
import { Suspense, lazy } from 'react';
import { Blocks } from 'react-loader-spinner';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favorites = lazy(() => import('pages/Favorites'));

export const App = () => {
  return (
    <StyledContainer>
      <header className="header">
        <nav>
          <NavLink to={'/'} className="header-link">
            Home
          </NavLink>
          <NavLink to={'/catalog'} className="header-link">
            Catalog
          </NavLink>
          <NavLink to={'/favorites'} className="header-link">
            Favorites
          </NavLink>
        </nav>
      </header>
      <Suspense
        fallback={
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};
