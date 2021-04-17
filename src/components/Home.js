import "../styles/Home.scss"
import coder from "../assets/alternative.svg"

function Home(){
    return(
        <div>
            <h1>Hi! I'm a Software Developer</h1>
            <h4>Do you hate CSS? Count on me!</h4>
            <img className="img" src={coder} alt="gif"/>
        </div>
    )
}

export default Home;