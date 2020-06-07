import React from 'react';

import Header from '../../components/Header';

import { Container, Main, Title } from './styles';

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <Main>
          <Title>
            Crie este site <strong>responsivo</strong> com{' '}
            <strong>REACT</strong>
            utilizando <strong>styled-components</strong>
          </Title>
        </Main>
      </Container>
    </>
  );
};

export default Home;
