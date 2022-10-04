import { Container } from '../../components/Container';
import { Link } from 'react-router-dom';
import { Wrapper, Title, Text } from './styles';

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

export default NotFound;