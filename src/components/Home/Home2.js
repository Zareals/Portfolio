import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillGitlab,
} from "react-icons/ai";
import { SiArtstation, SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a versatile game developer and designer with four years of
              experience, adept at creating a wide range of games from
              hyper-casual to VR experiences.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C#, Unity, and Unreal. </b>
              </i>
              <br />
              <br />
              My expertise spans technical game design, Unity development, and
              creating &nbsp;
              <i>
                <b className="purple">Indie Games </b> and also I enjoy making{" "}
                <b className="purple">B2B gamified products.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing games
              to create <b className="purple">Mobile Games</b> and
              <i>
                <b className="purple"> Unity Editors.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://gitlab.com/Bouanane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGitlab />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/NassefBouanane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nassef-bouanane/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.artstation.com/nassefbouanane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiArtstation />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~01df48f5b7fb5bc3ad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiUpwork />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Home2;
