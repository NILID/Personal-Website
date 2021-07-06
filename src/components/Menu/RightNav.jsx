import { Ul } from "./NavbarElements";
import { English, Japanese, Russian, Portuguese } from "./NavbarElements";

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
        <img src={English} alt="EN" />
        <img src={Japanese} alt="JP" />
        <img src={Russian} alt="RU" />
        <img src={Portuguese} alt="PT-BR" />
      </Ul>
    </>
  );
};

export default RightNav;
