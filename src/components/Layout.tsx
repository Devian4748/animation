import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainStage = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigate = styled.nav`
  width: 30%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  list-style: none;
  overflow-y: auto;

  li {
    width: 80%;
    text-align: center;
  }
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 1rem 2rem;
  border-radius: 25px;
  background-color: #c0392b;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s;
  &:hover {
    font-size: 1.5rem;
  }
`;

interface ILayout {
  children: JSX.Element;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Fragment>
      <MainStage>{children}</MainStage>
      <Navigate>
        <li>
          <NavItem to='/rotateBox'>Rotate Box</NavItem>
        </li>
        <li>
          <NavItem to='/variants'>Variants</NavItem>
        </li>
        <li>
          <NavItem to='/hoverTab'>Hover and Tab</NavItem>
        </li>
        <li>
          <NavItem to={{ pathname: '/drag', state: { drag: true } }}>
            Drag
          </NavItem>
        </li>
        <li>
          <NavItem to='/scroll'>Scroll</NavItem>
        </li>
        <li>
          <NavItem to='/svg'>SVG</NavItem>
        </li>
        <li>
          <NavItem to='/showHide'>Show Hide</NavItem>
        </li>
        <li>
          <NavItem to='/slider'>Slider</NavItem>
        </li>
        <li>
          <NavItem to='/layout'>Layout</NavItem>
        </li>
        <li>
          <NavItem to='/modal'>Modal</NavItem>
        </li>
      </Navigate>
    </Fragment>
  );
};

export default Layout;
