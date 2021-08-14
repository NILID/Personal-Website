import React from "react";

import {
  Card,
  CardImage,
  CardName,
  Description,
  Links,
  Preview,
  ButtonPreview,
  ButtonGithub,
} from "./CardElements";

import "./Projects.scss";

function CardComponent(props) {
  return (
    <>
      <Card>
        <CardImage>
          <img src={props.img} alt="" />
        </CardImage>
        <CardName>
          <p>{props.name}</p>
        </CardName>
        <Description>{props.description}</Description>
        <Links>
          <ButtonPreview>
            <a href="">LIVE</a>
          </ButtonPreview>
          <ButtonGithub>
            <a href="">GITHUB</a>
          </ButtonGithub>
        </Links>
      </Card>
    </>
  );
}

export default CardComponent;

// ADD A DESCENT BUTTON LATER
{
  /* <img src={props.livePreview} alt="" /> */
}
