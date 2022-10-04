import { Controls } from "../Controls/Controls"
import { Container } from "../Container";
import { Countries } from "../Countries/Countries";
import { Wrapper } from "./styles";

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
