import React from "react";

import {
  Card,
  CardImage,
  CardName,
  Description,
  Links,
  Button,
} from "./CardElements";

import "./Projects.scss";

function CardComponent(props) {
  return (
    <>
      <Card>
        <CardImage>
          <img src={props.img} alt="" />
        </CardImage>
        <CardName>{props.name}</CardName>
        <Description>{props.description}</Description>
        <Links>
          <Button>{props.livePreview}</Button>
          <Button>{props.github}</Button>
        </Links>
      </Card>
    </>
  );
}

export default CardComponent;

{
  /* <div class="card">
      <div class="card__image">
        <img src="https://images.pexels.com/photos/3323163/pexels-photo-3323163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
      <div class="card__name">
        <p>Name Placeholder</p>
      </div>
      <p>Details Placeholder one</p>
      <p>Placeholder Two</p>
      <p>Placeholder : 10-7</p>
      <div class="card__button">
        <p>View Profile</p>
      </div>
    </div> */
}
