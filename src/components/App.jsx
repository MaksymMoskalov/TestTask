import { Route, Routes } from 'react-router-dom';
import { StyledContainer } from 'Styles/Container.styled';
import { Suspense, lazy } from 'react';
import { Blocks } from 'react-loader-spinner';
import { Header } from './Header/Header';

const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));
const Favorites = lazy(() => import('pages/Fovorites/Favorites'));

export const App = () => {
  return (
    <StyledContainer>
      <Header />
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
