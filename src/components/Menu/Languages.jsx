import React from "react";
import {
  English,
  Japanese,
  Russian,
  Portuguese,
  Lang,
  LangFlag,
} from "./NavbarElements";

function Languages() {
  return (
    <>
      <Lang>
        <LangFlag>
          <img src={English} alt="EN" />
        </LangFlag>
        <LangFlag>
          <img src={Portuguese} alt="PT-BR" />
        </LangFlag>
        <LangFlag>
          <img src={Japanese} alt="JP" />
        </LangFlag>
        <LangFlag>
          <img src={Russian} alt="RU" />
        </LangFlag>
      </Lang>
    </>
  );
}

export default Languages;
