import React, { useContext } from "react";
import { Container, ContentOne, ContentTwo, Button } from "./HomeElements";
import dev from "../../assets/dev.svg";
import dictionary from "../Dictionary/dictionary";
import { LanguageContext } from "../../App";

function Home() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      {dictionary[language].map(({ slogan, button }) => (
        <Container>
          <ContentOne>
            <p>{slogan}</p>
            {/* <p>
              Think the <span>Design</span>,
            </p>
            and I design the <span>Code</span>.
            <br /> */}
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
      ))}
    </>
  );
}

export default Home;
