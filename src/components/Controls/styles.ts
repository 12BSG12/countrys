import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 80px;

@media(min-width: 767px) {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
} 
`;