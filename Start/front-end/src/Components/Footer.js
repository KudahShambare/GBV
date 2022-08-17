import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Logo from "../Components/Logo";

function Footer() {
  return (
    <footer
      className="main-footer"
      style={{ backgroundColor: "rgb(10,10,10)" }}
    >
      <Container fluid justify-content-center>
        <br />
        <Row>
          <Col md={4} sm={8}>
            <h4 style={{ fontWeight: "bolder", color: "white" }}>
              Contact Details{" "}
              <i
                class="fa fa-envelope"
                style={{ fontSize: "29px", color: "green" }}
              ></i>
            </h4>
            <ul className="list-unstyled" style={{ fontSize: "17px" }}>
              <li>
                <Logo />
              </li>
              <li style={{ color: "white" }}>30 Civic Road</li>
              <li style={{ color: "white" }}>Elsies River</li>

              <li style={{ color: "white" }}>7493, South Africa</li>
              <li>
                <li>
                  {" "}
                  <a
                    href="https://goo.gl/maps/4y4VrcCpHb5QSVG76"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src="../Components/Map.png"
                      height="100"
                      width="200"
                      alt="map view"
                    />{" "}
                  </a>
                </li>
                <strong style={{ color: "white" }}>Phone:</strong>{" "}
                <a
                  href="#Number"
                  style={{
                    color: "white",
                    fontWeight: "80px",
                    textDecoration: "none",
                  }}
                >
                  +27(0)212240983
                </a>
              </li>
              <li>
                <strong style={{ color: "white" }}>Email:</strong>{" "}
                <a
                  href="mailto:info@touchingnations.org"
                  style={{
                    fontSize: "5",
                    color: "white",
                    textDecoration: "none",
                    fontStyle: "italic",
                  }}
                >
                  info@touchingnations.org
                </a>
              </li>
              <li>
                <strong style={{ color: "white" }}>Donations:</strong>{" "}
                <a
                  href="https://www.payfast.co.za/donate/go/touchingnations"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontStyle: "italic",
                  }}
                >
                  PayFast Account
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} sm={8}>
            <h4
              style={{
                fontWeight: "bolder",
                marginLeft: "20%",
                color: "white",
              }}
            >
              Facebook{" "}
              <i
                class="fab fa-facebook-f"
                style={{ fontSize: "29px", color: "rgb(66,103,178)" }}
              ></i>
            </h4>
            <iframe
              style={{ height: "290px" }}
              title="facebook"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwearetouchingnations%2F&tabs=timeline&width=300&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="300"
              height="300"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </Col>
          <Col md={4} sm={8}>
            <h4
              style={{
                fontWeight: "bolder",
                marginLeft: "20%",
                color: "white",
              }}
            >
              Twitter{" "}
              <i
                class="fab fa-twitter"
                style={{ fontSize: "29px", color: "skyblue" }}
              ></i>
            </h4>
            <a
              class="twitter-timeline"
              data-width="300"
              data-height="300"
              href="https://twitter.com/TouchingNations?ref_src=twsrc%5Etfw"
              style={{
                textDecoration: "none",
                color: "white",
                fontStyle: "italic",
              }}
            >
              Tweets by TouchingNations{" "}
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
              target="_blank"
            ></script>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
