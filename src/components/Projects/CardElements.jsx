import styled from "styled-components";

export const Card = styled.div`
  margin: 10% auto;
  border: 1px dotted pink;
  width: 80%;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    /* display: flex;
    flex-direction: column; */
  }
`;

export const CardImages = styled.div``;
export const CardTitle = styled.div`
  text-align: center;
`;
export const CardDescription = styled.div`
  text-align: center;
`;

export const Links = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;

  img {
    width: 7vh;
    margin-left: 3.3vh;
  }
`;

export const ButtonPreview = styled.button`
  width: 40%;
  border: none;
  background-color: #2e186a;
  padding: 0.5rem;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
`;

export const ButtonGithub = styled.button`
  width: 40%;
  border: 0.5px solid black;
  background-color: #fff;
  padding: 0.5rem;
  cursor: pointer;

  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
  }
`;

// import styled from "styled-components";

// export const Card = styled.div`
//   width: 20vw;
//   height: 70vh;
//   margin-top: 20vh;
//   background-color: #fff;
//   border: 2px solid #2e186a;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const CardImage = styled.div`
//   width: 100%;
//   height: 45vh;
//   margin: auto;

//   /* margin-top: -50px; */
//   img {
//     width: 100%;
//     height: 100%;
//     cursor: pointer;
//   }

//   /* img:hover {
//     cursor: pointer;
//     transform: translateY(-2.5rem) scale(1.05);
//   } */
// `;

// export const CardName = styled.div`
//   height: 5vh;
//   margin: auto;
//   color: #2e186a;
//   width: 90%;
//   font-size: 2rem;

//   p {
//     text-align: center;
//   }
// `;

// export const Description = styled.div`
//   text-align: left;
//   width: 80%;
//   margin: auto;
//   height: 10vh;
//   color: #2e186a;
// `;

// export const Links = styled.div`
//   width: 80%;
//   display: flex;
//   justify-content: space-between;
//   margin: auto;

//   img {
//     width: 7vh;
//     margin-left: 3.3vh;
//   }
// `;

// export const Preview = styled.a`
//   height: 8vh;
//   width: 15vh;

//   img:hover {
//     transform: all 0.2s ease-in-out;
//     transform: scale(1.5);
//     cursor: pointer;
//   }
// `;
// export const Github = styled.a`
//   height: 8vh;
//   width: 15vh;

//   img:hover {
//     transform: all 0.2s ease-in-out;
//     transform: scale(1.5);
//     cursor: pointer;
//   }
// `;
