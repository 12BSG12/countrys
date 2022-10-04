import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10rem auto;
  width: 560px;
  text-align: center;
  a {
    padding: 0.5rem 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    border: none;
    color: var(--color-text);
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #777777;
  margin-bottom: 2rem;
`;
