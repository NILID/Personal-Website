import "../styles/Stacks.scss"
import htmlCss from "../assets/html-css.svg"
import javascript from "../assets/javascript.svg"
import reactjs from "../assets/react.svg"
import mongodb from "../assets/mongodb.svg"
import sass from "../assets/sass.svg"
import python from "../assets/python.svg"

function Stacks(){ 
    return(
        <div className="StacksContainer">
            <div><img className="img" src={htmlCss} alt="stack"></img></div>
            <div><img className="img" src={javascript} alt="stack"></img></div>
            <div><img className="img" src={reactjs} alt="stack"></img></div>
            <div><img className="img" src={mongodb} alt="stack"></img></div>
            <div><img className="img" src={sass} alt="stack"></img></div>
            <div><img className="img" src={python} alt="stack"></img></div>
        </div>
    )
}

export default Stacks;