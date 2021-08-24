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

        <CardTitle>
          <p>{props.title}</p>
        </CardTitle>
        <CardDescription>
          <p>{props.description}</p>
        </CardDescription>

        <Links>
          <ButtonPreview>LIVE</ButtonPreview>
          <ButtonGithub>GITHUB</ButtonGithub>
        </Links>
      </Card>
    </>
  );
}

export default CardComponent;
