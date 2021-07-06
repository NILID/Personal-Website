import { Ul } from "./NavbarElements";
import { English, Japanese, Russian, Portuguese } from "./NavbarElements";

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
        <li className="image">
          <img src={English} alt="EN" />
        </li>
        <li className="image">
          <img src={Japanese} alt="JP" />
        </li>
        <li className="image">
          <img src={Russian} alt="RU" />
        </li>
        <li className="image">
          <img src={Portuguese} alt="PT-BR" />
        </li>
      </Ul>
    </>
  );
};

export default RightNav;
