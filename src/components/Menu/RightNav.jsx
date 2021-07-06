import { Ul } from "./NavbarElements";
import { English, Japanese, Russian, Portuguese } from "./NavbarElements";

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
        <li>
          <img src={English} alt="EN" />
        </li>
        <li>
          <img src={Japanese} alt="JP" />
        </li>
        <li>
          <img src={Russian} alt="RU" />
        </li>
        <li>
          <img src={Portuguese} alt="PT-BR" />
        </li>
      </Ul>
    </>
  );
};

export default RightNav;
