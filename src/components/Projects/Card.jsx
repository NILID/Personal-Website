import React from "react";

import {
  Card,
  CardImage,
  CardName,
  Description,
  Links,
  Preview,
  Github,
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
          <Preview>
            <img src={props.livePreview} alt="" />
          </Preview>
          <Github>
            <img src={props.github} alt="" />
          </Github>
        </Links>
      </Card>
    </>
  );
}

export default CardComponent;
