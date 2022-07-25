import React from "react";
import NavBar from "../Components/NavBar";

const NotFoundPage = () => {
  return (
      <>
      <NavBar/>
      <div style={{ textAlign: "center" ,backgroundColor:"lightgray",color:"red",padding:"5%"}}>
        <h1 >404 Page Not Found</h1>
    
     
      </div>
      </>
    );
}

export default NotFoundPage;