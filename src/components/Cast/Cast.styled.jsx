import styled from 'styled-components';

export const CastStyled = styled.ul`
  list-style: none;

  & img {
    width: 160px;
    height: auto;
    background: lightgrey;
  }
`;

export const BackdropPhoto = styled.div`
  display: flex;
  width: 160px;
  height: 240px;
  background: lightgrey;

  & > p {
    margin: auto;
    color: whitesmoke;
    font-weight: 600;
    font-size: 30px;
  }
`;
