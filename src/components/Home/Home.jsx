import React from "react";
import { Container, ContentOne, ContentTwo, Button } from "./HomeElements";

function Home() {
  return (
    <>
      <Container>
        <ContentOne>
          <p>
            Think the <span>Design</span>,
          </p>
          and I design the <span>Code</span>
          <br />
          <Button>
            <a href="">Learn more</a>
          </Button>
        </ContentOne>
        <ContentTwo>
          <h1>LOREM IPSUM TWO</h1>
        </ContentTwo>
      </Container>
    </>
  );
}

export default Home;
