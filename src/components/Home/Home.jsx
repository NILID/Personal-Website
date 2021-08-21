import React, { useContext } from "react";
import {
  Container,
  ContentOne,
  ContentTwo,
  Button,
  Intro,
  Wrap,
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
              <Wrap>
                <h2 className="sloganFirstPart">{sloganFirstPart}</h2>
                <h2>{sloganSecondPart}</h2>
                <Intro>
                  <p className="introFirstPart">{intro}</p>
                  <p>{introSecondPart}</p>
                </Intro>
                <Button>
                  <div>
                    <a href="">{button}</a>
                  </div>
                </Button>
              </Wrap>
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

// coment here to see if it'll change something on github
