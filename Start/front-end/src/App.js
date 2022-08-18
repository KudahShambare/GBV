import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div id="page-body">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
