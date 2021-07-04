import React, { useState } from "react";
import { StyledBurger } from "./NavbarElements";
import RightNav from "./RightNav";
import Lang from "./Languages";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
