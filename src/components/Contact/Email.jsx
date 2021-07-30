import React from "react";

import { Form } from "./EmailElements";

function Email() {
  return (
    <>
      <Form>
        <label htmlFor="name"></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="email" />
      </Form>
    </>
  );
}

export default Email;
