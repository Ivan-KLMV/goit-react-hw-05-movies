import styled from 'styled-components';

export const LayoutStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: whitesmoke;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & nav {
    display: flex;
    gap: 20px;

    & > a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 500;
      color: darkgray;

      &:hover {
        color: darkblue;
      }
    }

    & .active {
      text-decoration: underline;
      color: darkblue;
    }
  }
`;
