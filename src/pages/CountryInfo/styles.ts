import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const IMG = styled.img.attrs((props) => ({
  src: props.src || '',
}))`
  display: block;
  width: 50%;
  height: 100%;
  object-fit: contain;
  margin-right: 80px;
  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
export const Info = styled.div`
  width: 50%;
`;
export const BackBtn = styled.button`
position: absolute;
  top: 50px;
  left: 0;
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
`;
export const Title = styled.h1`
  font-size: 25px;
  font-weight: var(--fw-bold);
  margin-bottom: 20px;
`;

export const Body = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
export const Text = styled.div`
  font-size: var(--fs-sm);
  p {
    margin-bottom: 10px;
  }
  span {
    font-weight: var(--fw-bold);
  }
`;

export const BorderCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
  font-size: var(--fs-sm);
  span {
    align-self: center;
    font-weight: var(--fw-bold);
  }
`;

export const BorderBtn = styled.button`
  padding: 0.4rem 0;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  border: none;
  color: var(--color-text);
  cursor: pointer;
`;
