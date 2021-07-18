import { useState } from "react";
import { Ul } from "./NavbarElements";
import { English, Japanese, Russian, Portuguese } from "./NavbarElements";
import Lang from "./Languages";

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>{/* <Lang></Lang> */}</Ul>
    </>
  );
};

export default RightNav;
