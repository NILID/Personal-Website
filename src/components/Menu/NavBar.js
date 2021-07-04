import React, { useState } from "react";

import {
  Nav,
  MenuLink,
  Bars,
  MobileMenuShow,
  NavMenu,
  NavBtn,
  NavBtnFlag,
  English,
  Japanese,
  Russian,
  Portuguese,
} from "./NavbarElements";

const Navbar = () => {
  // const [showMenu, setMenu] = useState(false);

  // let menu;

  // if (showMenu) {
  //   menu = (
  //     <MobileMenuShow>
  //       <MenuLink to="/about" activeStyle>
  //         About
  //       </MenuLink>
  //       <MenuLink to="/services" activeStyle>
  //         Projects
  //       </MenuLink>
  //       <MenuLink to="/contact-us" activeStyle>
  //         Contact
  //       </MenuLink>
  //     </MobileMenuShow>
  //   );
  // }

  return (
    <>
      <Nav>
        <MenuLink to="/">
          <h1>Flávio</h1>
        </MenuLink>
        <Bars onClick={() => setMenu(!showMenu)} />
        <NavMenu>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/services" activeStyle>
            Projects
          </MenuLink>
          <MenuLink to="/contact-us" activeStyle>
            Contact
          </MenuLink>
        </NavMenu>
        <NavBtn>
          <NavBtnFlag>
            <img src={English} alt="EN" />
          </NavBtnFlag>
          <NavBtnFlag>
            <img src={Portuguese} alt="BR" />
          </NavBtnFlag>
          <NavBtnFlag>
            <img src={Japanese} alt="JP" />
          </NavBtnFlag>
          <NavBtnFlag>
            <img src={Russian} alt="RU" />
          </NavBtnFlag>
        </NavBtn>

        {menu}
      </Nav>
    </>
  );
};

export default Navbar;
