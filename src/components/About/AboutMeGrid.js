import React from "react";
import "../../styles/AboutMeGrid.scss";
import selfie from "../../assets/selfie.svg";
import Stacks from "./Stacks";

function AboutMeGrid() {
  return (
    <div className="AboutMeGrid">
      <div>
        <img className="selfie" src={selfie} alt="" />
        <Stacks></Stacks>
      </div>
      <div>
        <h2>Lorem Ipsum</h2>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          cupiditate? Nulla voluptatibus aperiam veniam tempora impedit, dolor
          quos excepturi rem ducimus! Magni quam doloremque eum veniam? Dolorem,
          sint laborum. Officiis.
        </h5>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          beatae placeat in quibusdam nemo ratione perferendis maxime, eum
          sapiente, eaque dolore consectetur eius ex ab repellendus aspernatur
          vitae quis autem?
        </h5>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corporis
          fuga perferendis amet, dignissimos commodi eius sapiente aut aliquam
          asperiores quae rerum magni iure facere ex ipsa deserunt id minus!
        </h5>
        <h5>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          corporis quaerat quidem unde itaque atque temporibus, non ipsa minus
          minima nulla ipsum consectetur expedita labore recusandae distinctio
          magni? Tempore, magnam?
        </h5>
      </div>
    </div>
  );
}

export default AboutMeGrid;
