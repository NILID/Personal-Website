import React, { useContext } from "react";
import {
  Container,
  ContentOne,
  ContentTwo,
  Button,
  Intro,
  Link,
} from "./HomeElements";

import githubIcon from "../../assets/home/github.svg";
import linkedinIcon from "../../assets/home/linkedin.svg";

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
              <Link>
                <img src={githubIcon} alt="" />
                <img src={linkedinIcon} alt="" />
              </Link>
            </ContentOne>
            <ContentTwo>
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
            </ContentTwo>
          </Container>
        )
      )}
    </>
  );
}

export default Home;
