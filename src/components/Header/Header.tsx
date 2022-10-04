import { Container } from '../Container';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setTheme } from '../../redux/reducers/app';
import { HeaderEl, Wrapper, Title, ModeSwitcher } from './styles';

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
