import Menu from "./Menu"
import Home from "./Home"
import Stacks from "./Stacks"

import "../styles/Main.scss"

function Main(){
    return(
        <div>
            <Menu></Menu>
            <Home></Home>
            <Stacks></Stacks>
        </div>
    )
}

export default Main;