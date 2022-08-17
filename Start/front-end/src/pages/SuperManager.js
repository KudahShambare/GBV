import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Scroll from "react-scroll";
import React, { useEffect, useState } from "react";
import Forms from "../Components/SocialWorkerDashboardForms";
import Col from "react-bootstrap/Col";
import SuperManagerNavBar from "../Components/SuperManagerNavBar";
import SocialWorkerSignUpRequestCards from "../Components/SuperManagerSocialWorkerForms";
import FundersSignUpRequestCards from "../Components/SuperManagerFundersForms";
import ManagerAddRefferingOrganisation from "../Components/ManagerAddReferringOrganisation";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    backgroundColor: "green",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const SuperManager = () => {
  const classes = useStyles();
  var Element = Scroll.Element;
  const [caseInfo, setCaseInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://localhost:8000/social-worker-dashboard"
      );
      const body = await result.json();
      setCaseInfo(body);
    };

    fetchData();
  }, []);
  const data = caseInfo;
  return (
    <>
      <SuperManagerNavBar />
      <br />
      <Container>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={4} lg={4} xl={4} xxl={4}>
            <div className={classes.card}>
              <EmojiPeopleIcon color="primary" fontSize="large" />
              <Typography variant="h5" component="h3" className={classes.title}>
                <a
                  href="#liveCases"
                  style={{ "text-decoration": "none", color: "white" }}
                >
                  Live Cases
                </a>
              </Typography>
              <Typography className={classes.featureList}>
                <a
                  href="#liveCases"
                  style={{ "text-decoration": "none", color: "white" }}
                >
                  Monitor the GBV victim cases and which social worker is
                  assigned to each one.
                </a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <EmojiPeopleIcon color="primary" fontSize="large" />
              <Typography variant="h5" component="h3" className={classes.title}>
                <a
                  href="#socialWorkersSignUp"
                  style={{ "text-decoration": "none", color: "white" }}
                >
                  Social Workers Sign Up requests
                </a>
              </Typography>
              <Typography className={classes.featureList}>
                <a
                  href="#socialWorkersSignUp"
                  style={{ "text-decoration": "none", color: "white" }}
                >
                  Click here to chose who has access to the company data
                </a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <LocationCityIcon color="primary" fontSize="large" />
              <Typography variant="h5" component="h3" className={classes.title}>
                <a
                  href="#fundersShareholdersSignUp"
                  style={{ "text-decoration": "none", color: "white" }}
                >
                  {" "}
                  Funders and shareholders sign up requests
                </a>
              </Typography>
              <Typography className={classes.featureList}>
                <a
                  href="#fundersShareholdersSignUp"
                  style={{ "text-decoration": "none", color: "white" }}
                >
                  Click here to chose who has access to the company data
                </a>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container id="liveCases" component="section" maxWidth="lg">
        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "500px",
            overflow: "scroll",
          }}
        >
          <>
            <br />
            <br />
            {
              <h3 className="managerHeading">
                <strong>Live Cases:</strong>
              </h3>
            }
            {caseInfo.map((post) => {
              return (
                <Col
                  sm={12}
                  md={12}
                  lg={8}
                  xl={12}
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  <Forms
                    caseId={post.case_number}
                    caseType={post.case_type}
                    gender={post.gender}
                    language={post.languages}
                    ethnicity={post.ethnicity}
                    educationalLevel={post.education_level}
                    typeOfAbuse={post.abuse}
                    genderOfAbuser={post.details_of_incident}
                    relationshipToAbuser={post.relationship_to_client}
                    history={post.details_of_incident}
                  />
                </Col>
              );
            })}
            <br />
          </>
        </Element>
      </Container>

      <Container id="socialWorkersSignUp" component="section" maxWidth="lg">
        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "500px",
            overflow: "scroll",
          }}
        >
          <>
            <br />
            {
              <h3 className="managerHeading">
                <strong>Social Workers Sign Up Requests:</strong>
              </h3>
            }
            {caseInfo.map((post) => {
              return (
                <Col sm={12} md={12} lg={8} xl={12}>
                  <SocialWorkerSignUpRequestCards
                    caseId={post.case_number}
                    employeeIDInputValidation={post.employeeIDInputValidation}
                  />
                </Col>
              );
            })}
            <br />
          </>
        </Element>
      </Container>

      <Container
        id="fundersShareholdersSignUp"
        component="section"
        maxWidth="lg"
      >
        <Element
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "500px",
            overflow: "scroll",
          }}
        >
          <>
            <br />
            {
              <h3 className="managerHeading">
                <strong>Funders and Shareholders sign up request:</strong>
              </h3>
            }
            {caseInfo.map((post) => {
              return (
                <Col sm={12} md={12} lg={8} xl={12}>
                  <FundersSignUpRequestCards
                    caseId={post.case_number}
                    employeeIDInputValidation={post.employeeIDInputValidation}
                  />
                </Col>
              );
            })}
            <br />
          </>
        </Element>
      </Container>
      <br />

      <Container
        id="fundersShareholdersSignUp"
        component="section"
        maxWidth="lg"
      >
        <Element
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "500px",
            overflow: "scroll",
          }}
        >
          <>
            <br />
            <ManagerAddRefferingOrganisation />
            <br />
          </>
        </Element>
      </Container>
    </>
  );
};

export default SuperManager;
