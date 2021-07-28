import React, { useContext } from "react";
import { Container, ContentOne, ContentTwo, Button } from "./HomeElements";
import dev from "../../assets/dev.svg";

import { LanguageContext } from "../../App";

function Home() {
  const [language, setLanguage] = useContext(LanguageContext);

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
