import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 50px;
  margin-top: ${props => (props.$marginTop ? `20px` : '0px')};
`;
