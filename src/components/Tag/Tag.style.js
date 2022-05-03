import styled from 'styled-components';

export const Tagas = styled.h1`
  color: ${(props) => (props.color ? props.color : 'black')};
`;
