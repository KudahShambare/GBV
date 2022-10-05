import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";
import FAQ from "./pages/FAQ";
import RefOrgs from "./pages/RefOrgs";
import Staff from "./pages/Staff";
import Victims from "./pages/Victims";
import SocialWorker from "./pages/SocialWorker";
import Auxillery from "./pages/Auxillery";
import Administrators from "./pages/Administrators";


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div id="page-body">
 <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/reffering-organisations" component={RefOrgs} />
    <Route exact path="/staff" component={Staff} />
    <Route exact path="/social-worker" component={SocialWorker} />
    <Route exact path="/administrators" component={Administrators} />
    <Route exact path="/auxillery-social-worker" component={Auxillery} />
    <Route exact path="/faq" component={FAQ} />
    <Route exact path="/victims" component={Victims} />

                      <Route component={NoPageFound} />
 </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
