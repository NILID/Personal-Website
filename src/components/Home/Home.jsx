import React from "react";
import { Container, ContentOne, ContentTwo, Button } from "./HomeElements";
import dev from "../../assets/dev.svg";

function Home() {
  return (
    <>
      <Container>
        <ContentOne>
          <p>
            Think the <span>Design</span>,
          </p>
          and I design the <span>Code</span>.
          <br />
          <Button>
            <a href="">Learn more</a>
          </Button>
        </ContentOne>
        <ContentTwo>
          <img src={dev} alt="" />
        </ContentTwo>
      </Container>
    </>
  );
}

export default Home;
