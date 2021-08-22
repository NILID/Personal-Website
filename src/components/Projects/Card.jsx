import React from "react";

import {
  Card,
  CardImages,
  CardTitle,
  CardDescription,
  Links,
  ButtonPreview,
  ButtonGithub,
} from "./CardElements";

import "./Projects.scss";

function CardComponent(props) {
  return (
    <>
      <Card>
        <CardImages>
          <img src={props.image} alt="" />
        </CardImages>

        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <Links>
          <ButtonPreview></ButtonPreview>
          <ButtonGithub></ButtonGithub>
        </Links>
      </Card>
    </>
  );
}

export default CardComponent;

// function CardComponent(props) {
//   return (
//     <>
//       <Card>
//         <CardImage>
//           <img src={props.img} alt="" />
//         </CardImage>
//         <CardName>
//           <p>{props.name}</p>
//         </CardName>
//         <Description>{props.description}</Description>
//         <Links>
//           <ButtonPreview>
//             <a href="https://econocargo.herokuapp.com/">LIVE</a>
//           </ButtonPreview>
//           <ButtonGithub>
//             <a href="">GITHUB</a>
//           </ButtonGithub>
//         </Links>
//       </Card>
//     </>
//   );
// }

// ADD A DESCENT BUTTON LATER
{
  /* <img src={props.livePreview} alt="" /> */
}
