import React, { useContext } from "react";
import "./Projects.scss";

//IMPORTING IMAGES FOR PROJECTS
import troika from "../../assets/projects/troika.svg";
import econocargo from "../../assets/projects/econocargo.png";
// import troika from "../../assets/projects/transiberia.svg";

import preview from "../../assets/projects/preview.svg";
import github from "../../assets/projects/github.svg";
import { Project, Container, Title } from "./ProjectsElements";
import CardComponent from "./Card";
import dictionary from "../Dictionary/dictionary";
import { LanguageContext } from "../../App";

function Projects() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      {dictionary[language].map(({ titleProjects }) => (
        <Project id="project">
          <Title>
            <h1>{titleProjects}</h1>
          </Title>
          <Container>
            <CardComponent
              img={econocargo}
              name="Algorithm"
              description="Visualization of three algorithms. This project was done fully with ReactJS and Javascript."
              livePreview={preview}
              github={github}
            ></CardComponent>
            <CardComponent
              img={troika}
              name="Project"
              description="Visualization of three algorithms. This project was done fully with ReactJS and Javascript."
              livePreview={preview}
              github={github}
            ></CardComponent>
            <CardComponent
              img={econocargo}
              name="Project"
              description="Visualization of three algorithms. This project was done fully with ReactJS and Javascript."
              livePreview={preview}
              github={github}
            ></CardComponent>
          </Container>
        </Project>
      ))}
    </>
  );
}

export default Projects;

// function Projects() {
//   const [language] = useContext(LanguageContext);

//   return (
//     <>
//       {dictionary[language].map(({ titleProjects }) => (
//         <Project id="project">
//           <Title>
//             <h1>{titleProjects}</h1>
//           </Title>
//           <Container>
//             <CardComponent
//               img={econocargo}
//               name="Algorithm"
//               description="Visualization of three algorithms. This project was done fully with ReactJS and Javascript."
//               livePreview={preview}
//               github={github}
//             ></CardComponent>
//             <CardComponent
//               img={troika}
//               name="Project"
//               description="Visualization of three algorithms. This project was done fully with ReactJS and Javascript."
//               livePreview={preview}
//               github={github}
//             ></CardComponent>
//             <CardComponent
//               img={econocargo}
//               name="Project"
//               description="Visualization of three algorithms. This project was done fully with ReactJS and Javascript."
//               livePreview={preview}
//               github={github}
//             ></CardComponent>
//           </Container>
//         </Project>
//       ))}
//     </>
//   );
// }
