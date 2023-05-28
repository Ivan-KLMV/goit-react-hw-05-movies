import { NavLink, Outlet } from 'react-router-dom';
import { LayoutStyled } from './Layout.styled';
import { ContainerStyled } from 'components/Container.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <ContainerStyled>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </ContainerStyled>
      </LayoutStyled>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
