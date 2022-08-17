import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import Axios from "axios";
import CircularLoader from "../Components/CircularLoader";

function TrackCase() {
  //Fetching Case Data from Database API

  const [caseInfo, setCaseInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    if (caseInfo) {
      setTimeout(() => {
        Axios.get("https://revolutionery.glitch.me/tracking")
          .then((response) => {
            setCaseInfo(response.data);
            setLoading(false);
            return null;
          })
          .catch((err) => {
            alert(err);
            setLoading(false);
            return null;
          })
          .finally(() => {
            setLoading(false);
          });
      }, 5000);
    }
  }, []);
  console.log(caseInfo);
  const value = document.getElementsByClassName("trackCase").value;
  console.log(value);

  if (loading) {
    return (
      <div id="trackingLoading">
        <NavBar />

        <h1>Loading ...</h1>
        <CircularLoader />
      </div>
    );
  } else
    return (
      <>
        <NavBar />
        <h3 className="text-center">
          <strong> Your Tracking details:</strong>
        </h3>
        <br />
        <Container className="text-center">
          <Card>
            <CardHeader
              caseInfo
              // title={`Case ID: ${caseInfo[0].client_id}`}
              subheader={`Case type: Undefined`}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <FloatingLabel controlId="floatingTextarea" className="mb-3">
                  <strong>Status of Case:</strong>
                  Undefined
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2">
                  <strong>Notes on case by social Worker: </strong>None so far
                </FloatingLabel>
              </Typography>
            </CardContent>
          </Card>
        </Container>
        <br />
      </>
    );
}
export default TrackCase;
