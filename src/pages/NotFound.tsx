import styled from 'styled-components';
import { Container } from '../components/Container';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
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

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;
const Text = styled.p`
  font-size: 18px;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #777777;
  margin-bottom: 2rem;
`;

export const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Данной страницы не существует 😕</Title>
        <Text>
          Вероятней всего, вы перешли по некорректной ссылке.
          <br />
          Для того, чтобы продолжить, перейдите на главную страницу.
        </Text>
        <Link to="/">
          <span>На главную</span>
        </Link>
      </Wrapper>
    </Container>
  );
};
