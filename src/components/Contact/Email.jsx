import React from "react";

import { FormEmail } from "./EmailElements";

function Email() {
  return (
    <>
      <FormEmail>
        <label htmlFor="name"></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="email" />
      </FormEmail>
    </>
  );
}

export default Email;
