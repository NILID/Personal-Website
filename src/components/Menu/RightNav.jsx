import { Ul } from "./NavbarElements";
import Lang from "./Languages";

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
        {/* <Lang /> */}
      </Ul>
    </>
  );
};

export default RightNav;
