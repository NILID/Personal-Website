import React, { useContext } from "react";
import {
  Container,
  ContentOne,
  ContentTwo,
  Button,
  Intro,
} from "./HomeElements";
import dev from "../../assets/dev.svg";
import dictionary from "../Dictionary/dictionary";
import { LanguageContext } from "../../App";

function Home() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      {dictionary[language].map(
        ({
          sloganFirstPart,
          sloganSecondPart,
          intro,
          introSecondPart,
          button,
        }) => (
          <Container>
            <ContentOne>
              <h2>{sloganFirstPart}</h2>
              <h2>{sloganSecondPart}</h2>
              <Intro>
                <p>{intro}</p>
                <p>{introSecondPart}</p>
              </Intro>
              <Button>
                <div>
                  <a href="">{button}</a>
                </div>
              </Button>
            </ContentOne>
            <ContentTwo>
              <img src={dev} alt="" />
            </ContentTwo>
          </Container>
        )
      )}
    </>
  );
}

export default Home;
