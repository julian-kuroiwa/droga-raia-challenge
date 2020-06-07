import React from 'react';

import LogoImg from '../../assets/logo.png';

import { Container, HeaderWrapper, Logo, Navigation } from './styles';

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={LogoImg} alt="Raia Drogasil S.A" />
        <Navigation>
          <ul>
            <li>
              <a href="#">HTML5</a>
            </li>
            <li>
              <a href="#">CSS3</a>
            </li>
            <li>
              <a href="#">Javascript</a>
            </li>
            <li>
              <a href="#">React</a>
            </li>
            <li>
              <a href="#">Redux</a>
            </li>
          </ul>
        </Navigation>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
