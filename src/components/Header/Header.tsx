import styled from 'styled-components';
import { Container } from '../Container';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setTheme } from '../../redux/reducers/app';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: centre;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  cursor: pointer;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  text-transform: capitalize;
`;

export const Header = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.app);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" style={{ position: 'relative', top: '2px' }} />
            ) : (
              <IoMoon size="14px" style={{ position: 'relative', top: '2px' }} />
            )}
            <span style={{ marginLeft: '0.75rem' }}>{theme} mode</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
