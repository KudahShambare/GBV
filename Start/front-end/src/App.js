import './App.css';
import GBVVictims from './pages/GBVVictims';
import SocialWorkers from './pages/SocialWorkers';
import FundersShareholders from './pages/FundersShareholders';
import FundersShareholdersSignup from "./pages/FundersShareholdersSignup";
import ArticlePage from '../src/pages/ArticlePage';
import NotFoundPage from '../src/pages/NotFoundsPage';
import Footer from '../src/Components/Footer';
import CallBackForm from "./pages/CallbackForm";
import GBVVictimsFAQ from './pages/GBVVictimsFAQ';
import ReferingOrganisationForm from './pages/ReferingOrganisationForm';
import SocialWorkerDashboard from './pages/SocialWorkerDashboard';
import SocialWorkerSignup from './pages/SocialWorkerSignup';
import TrackCase from './pages/TrackCasePage';
import FundersShareholdersDashboard from "./pages/FundersShareholdersDashboard";

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import ClientForm from './pages/ClientForm';
import TrackYourCase from './Components/TrackYourCase';
import SuperManager from './pages/SuperManager';
import RegisterReferringOrganisation from './pages/RegisterReferringOrganisation';

function App() {
  return (
    <>
    <div style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'https://media.istockphoto.com/photos/world-map-in-white-over-light-gray-with-slight-volume-shadow-digital-picture-id1257478941?b=1&k=20&m=1257478941&s=170667a&w=0&h=36ekcsd-vWEjiJnfVx8YQuff_ld4nEec50MMdFDPTjw='})`,
    }}>
      <Router>
        <div className="App">
          <div id="page-body">
            <Switch>
            <Route path="/" component={GBVVictims} exact />
            <Route path="/social-workers-signin" component={SocialWorkers} />
            <Route path="/funders-shareholders/:name" component={ArticlePage} />
            <Route path="/gbv-victim-form" component={ClientForm} />
            <Route path="/call-back-form" component={CallBackForm} />
            <Route path="/GBV-Victims-FAQ" component={GBVVictimsFAQ} />
            <Route path="/refering-organisation-form" component={ReferingOrganisationForm} />
            <Route path="/funders-shareholders-signin" component={FundersShareholders} />
            <Route path='/social-worker-dashboard' component={SocialWorkerDashboard}  />        
            <Route path="/funders-shareholders-signup" component={FundersShareholdersSignup}/>  
            <Route path='/social-worker-signup' component={SocialWorkerSignup} />
            <Route path='/track-your-case' component={TrackCase}/>
            <Route path="/funders-shareholders-dashboard" component={FundersShareholdersDashboard}/>
            <Route path="/super-manager" component={SuperManager}/>
            <Route path="/refering-organisation-registration" component={RegisterReferringOrganisation}  />


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
