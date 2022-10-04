import styled from 'styled-components';

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
grid-template-rows: repeat(1, 1fr);
gap: 40px;
`;

export const Cart = styled.div`
  width: 100%;
  height: 310px;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
export const CartImg = styled.div`
  img {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: var(--radii) var(--radii) 0 0;
  }
`;
export const CartInfo = styled.div`
  padding: 1rem 1.5rem 2rem;
  h2 {
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    margin-bottom: 20px;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);
    &:last-child {
      margin-bottom: 0;
    }
  }
  span {
    font-weight: var(--fw-bold);
    padding-right: 1rem;
  }
`;