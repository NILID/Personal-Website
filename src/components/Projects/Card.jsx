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
          <ButtonPreview>
            <a href="https://econocargo.herokuapp.com/" target="_blank">
              LIVE
            </a>
          </ButtonPreview>
          <ButtonGithub>
            <a
              href="https://github.com/drrh12/econocargo_portfolio"
              target="_blank"
            >
              GITHUB
            </a>
          </ButtonGithub>
        </Links>
      </Card>
    </>
  );
}

export default CardComponent;
