import React from "react";
import Footer from "../components/Footer";
import Services from "../components/Services";
import NavBar from "../components/NavBar";
import Emergency from "../components/Emergency";
import RefOrgDemo from "../components/RefOrgDemo";
import  QuickHelp from "../components/QuickHelp";
import SocialWorkerDemo from "../components/SocialWorkerDemo";

const Home=()=>{
    return(
      <>
      <NavBar/>
        <div className="pages">
        <Emergency/>
<Services/>
<QuickHelp/>
<RefOrgDemo/>
<SocialWorkerDemo/>
        </div>
        <Footer/>
        </>
    )
}
export default Home;