import styled from 'styled-components';

export const MovieDetailsStyled = styled.div`
  & button {
    margin-bottom: 10px;
  }

  & > div {
    display: flex;
    gap: 20px;

    & > img {
      width: 240px;
      height: auto;
      background: lightgray;
      flex-shrink: 0;
    }
  }
`;

export const InformationStyled = styled.div`
  flex-direction: column;
`;
