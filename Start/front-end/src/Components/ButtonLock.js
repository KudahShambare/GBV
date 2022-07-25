import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import LockIcon from '@mui/icons-material/Lock';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function CircularIntegration(props) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12} lg={4}>
            <Box sx={{ m: 1, position: "relative" }}>
              <Fab
                aria-label="GBV victim form redirection"
                style={{ backgroundColor: "white" }}
                sx={buttonSx}
                onClick={handleButtonClick}
                href="/gbv-victim-form"
              >
                {success ? <LockIcon /> : <LockIcon />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
          </Col>
          <Col sm={0} md={12} xs={0} lg={8}>
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                style={{ backgroundColor: "green" }}
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleButtonClick}
                href={props.text}
              >
                {props.value}
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
