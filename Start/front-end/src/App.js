import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div id="page-body">
            <Switch>
              <Route exact path="/" component={Home} />
                <Route exact path="/" component={Home} />
                  <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />

                      <Route component={NoPageFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
