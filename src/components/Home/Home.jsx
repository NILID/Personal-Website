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
                <a href="https://github.com/drrh12" target="_blank">
                  <img src={githubIcon} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fl%C3%A1vio-andrade-9b74a01a5/"
                  target="_blank"
                >
                  <img src={linkedinIcon} alt="" />
                </a>
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
