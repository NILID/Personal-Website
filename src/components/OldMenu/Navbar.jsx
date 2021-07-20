import Burger from "./Burger";
import { Nav } from "./NavbarElements";
import Lang from "./Languages";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Burger />
        <Lang></Lang>
      </Nav>
    </>
  );
};

export default Navbar;
