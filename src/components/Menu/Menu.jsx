import React, { useState } from "react";

function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close = () => setClick(false);

  return (
    <>
      <Container>
        <MainContainer
          className={click ? "main-container" : ""}
          onClick={() => close}
        ></MainContainer>
      </Container>
    </>
  );
}

export default Menu;
