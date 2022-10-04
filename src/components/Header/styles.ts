import styled from 'styled-components';

export const HeaderEl = styled.header`
box-shadow: var(--shadow);
background-color: (--colors-ui-base);
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: centre;
padding: 2rem 0;
`;

export const Title = styled.a.attrs({
href: '/',
})`
color: var(--colors-text);
font-size: var(--fs-sm);
text-decoration: none;
font-weight: var(--fw-bold);
`;

export const ModeSwitcher = styled.div`
cursor: pointer;
color: var(--colors-text);
font-size: var(--fs-sm);
text-decoration: none;
text-transform: capitalize;
`;