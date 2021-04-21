import "../../styles/Stacks.scss";
import html from "../../assets/html5.svg";
import javascript from "../../assets/javascript.svg";
import reactjs from "../../assets/react.svg";
import mongodb from "../../assets/mongodb.svg";
import sass from "../../assets/sass.svg";
import python from "../../assets/python-icon.svg";
import css from "../../assets/css-5.svg";
import git from "../../assets/git-icon.svg";
import redux from "../../assets/redux.svg";

import StackCard from "./StackCard";

function Stacks() {
  return (
    <div className="StacksContainer">
      <div className="StacksCardContainer">
        <StackCard title="HTML5" img={html}></StackCard>
      </div>
      <div className="StacksCardContainer">
        <StackCard title="CSS3" img={css}></StackCard>
      </div>
      <div className="StacksCardContainer">
        <StackCard title="ReactJS" img={reactjs}></StackCard>
      </div>
      <div className="StacksCardContainer">
        <StackCard title="Javascript ES6" img={javascript}></StackCard>
      </div>
      <div className="StacksCardContainer">
        <StackCard title="MongoDB" img={mongodb}></StackCard>
      </div>
      <div className="StacksCardContainer">
        <StackCard title="Python" img={python}></StackCard>
      </div>
      <div className="StacksCardContainer">
        <StackCard title="Sass" img={sass}></StackCard>
      </div>
      <div className="StacksCardContainer">
        <StackCard title="Redux" img={redux}></StackCard>
      </div>
    </div>
  );
}

export default Stacks;
