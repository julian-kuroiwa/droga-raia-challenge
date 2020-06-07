import styled from 'styled-components';
import { mediaQueries } from '../../styles/media';

export const Container = styled.header`
  ${mediaQueries('medium')`
    margin: 0 20px;
  `};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  ${mediaQueries('medium')`
    flex-direction: row;
    border-bottom: 1px solid #E0E0E0;
  `};
`;

export const Logo = styled.img`
  margin: 5px 0 10px;

  ${mediaQueries('small')`
    margin: 20px 0;
  `};
`;

export const Navigation = styled.nav`
  width: 100%;

  ${mediaQueries('small')`
    padding: 30px 0;
    border-top: 1px solid #E0E0E0;
  `};

  ${mediaQueries('medium')`
    border-top: 0;
  `};

  ul {
    ${mediaQueries('small')`
      display: flex;
      align-item: center;
      justify-content: center;
    `};

    ${mediaQueries('medium')`
      justify-content: flex-end;
    `};
  }

  li {
    ${mediaQueries('small')`
      & + li {
        margin-left: 20px;
      }
    `};
  }

  a {
    background-color: #79e1d5;
    color: #fff;
    text-decoration: none;
    font-size: 25px;
    text-align: center;
    display: block;
    text-transform: uppercase;

    ${mediaQueries('smaller')`
      background-color: #9C8CB9;
    `};

    ${mediaQueries('small')`
      background-color: transparent;
      color: #007f56;
      font-size: 22px;
    `};
  }
`;
