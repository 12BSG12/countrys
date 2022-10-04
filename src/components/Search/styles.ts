import styled from 'styled-components';

export const InputContainer = styled.label`
  display: flex;
  align-items: centre;
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  
  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
`;
