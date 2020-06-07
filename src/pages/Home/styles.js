import styled from 'styled-components';
import { mediaQueries } from '../../styles/media';

export const Container = styled.div`
  margin: 0 20px;
`;

export const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 50px 0;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  color: #79e1d5;
  font-weight: 300;

  ${mediaQueries('smaller')`
    color: #9C8CB9;
    font-size: 26px;
    line-height: 26px;
  `};

  ${mediaQueries('small')`
    color: #FBCA61;
    margin: 10px 0;
    font-size: 40px;
    line-height: 40px;
  `};

  ${mediaQueries('medium')`
    color: #007f56;
    font-size: 60px;
    line-height: 60px;
  `};
`;
