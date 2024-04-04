import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNavigation } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNavigation>
        <NavLink to={'/'} className="header-link">
          HomE
        </NavLink>
        <NavLink to={'/catalog'} className="header-link">
          CataloG
        </NavLink>
        <NavLink to={'/favorites'} className="header-link">
          FavoriteS
        </NavLink>
      </StyledNavigation>
    </StyledHeader>
  );
};
