import Burger from "./Burger";
import { Nav, Logo } from "./NavbarElements";
import Lang from "./Languages";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>
          <h1>Flávio</h1>
        </Logo>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
