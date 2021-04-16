import { Switch, Route } from "react-router-dom";
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Main exact path="/"></Main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
