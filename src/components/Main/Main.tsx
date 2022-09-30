import { Controls } from "../Controls/Controls"
import styled from 'styled-components';
import { Container } from "../Container";
import { Countries } from "../Countries/Countries";

const Wrapper = styled.div`
  padding: 2rem 0;
  @media(min-width: 767px) {
    padding: 4rem 0;
  }
`;
export const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Controls />
        <Countries />
      </Container>
    </Wrapper>
  )
}
