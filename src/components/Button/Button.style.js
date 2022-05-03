import styled from 'styled-components';
export const Btn = styled.button`
  background: ${(props) => (props.primary ? 'blue' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  cursor: pointer;
  height: 2rem;
  width: 8rem;
  border: 1px solid black;
  margin: 2rem;
  border-radius: 1rem;
`;
