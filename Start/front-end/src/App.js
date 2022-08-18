import './App.css';


import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


function App() {
  return (
    <>
    <div >
      <Router>
        <div className="App">
          <div id="page-body">
            <Switch>
      
            <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>        
    <Footer />
    </>
  );
}

export default App;
