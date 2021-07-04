import { Ul } from "./NavbarElements";

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </Ul>
    </>
  );
};

export default RightNav;
