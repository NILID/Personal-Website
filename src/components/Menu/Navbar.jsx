import Burger from "./Burger";
import { Nav } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Flávio</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
