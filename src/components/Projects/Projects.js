import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitness from "../../Assets/Projects/FT.png";
import ideathon from "../../Assets/Projects/frame0045.png";
import windbreaker from "../../Assets/Projects/WindBreaker.png";
import vaw from "../../Assets/Projects/VAWLogo.png";
import vrexperimental from "../../Assets/Projects/HeavenHell.png";
import kingkhalid from "../../Assets/Projects/kkf-master-brand.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vaw}
              videoPath= "https://storage.googleapis.com/creatorspace-public/users%2Fclqfe4p8t00fbq1018lrqxle8%2FaR8Gt9gYac1AoAFs-movie_006.mp4"
              isVideo={false}
              isBlog={false}
              title="Virtual Adventure Workout"
              description="Step into a new era with our VR health system. It integrates virtual reality for precision in patient care, with intuitive interfaces and real-time insights."
              demoLink="https://www.vaw.training/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kingkhalid}
              isBlog={false}
              title="Carbon Emission Calculator"
              description="A project made for King Khalid Foundation. It calculates the carbon footprint of the user and also shows how much carbon is reduced if the user is not using the device properly. "
              demoLink="https://drive.google.com/file/d/1irRqiyEeC_XConMlsXkOK6Ytq4SRQpkZ/view?usp=sharing"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={windbreaker}
              isBlog={false}
              title="WindBreaker"
              description="While gameplay elements may vary across levels, the metrics we collect remain consistent. This ensures continuity in tracking the player's performance and allows for comprehensive analysis regardless of the specific challenges presented in each level."
              demoLink="https://docs.vaw.training/The-Boxing-Game-988b883e1ba84310820fffbba8ba7131"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Fitness Tracker"
              description="While gameplay elements may vary across levels, the metrics we collect remain consistent. This ensures continuity in tracking the player's performance and allows for comprehensive analysis regardless of the specific challenges presented in each level."
              demoLink="https://streamable.com/bga3hq"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ideathon}
              isBlog={true}
              title="Ideathon 3"
              description="A 2D platform that can be switched to a 2D top-down shooter, The player has multiple abilities like a dash, time slow, grabbing hook...
              The game has also a multiplayer mode."
              demoLink="https://www.artstation.com/artwork/yJ31xK"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrexperimental}
              isBlog={true}
              title="Heaven and Hell"
              description="an expiremental VR game for an art competion"
              demoLink="https://drive.google.com/file/d/1lBaShR2VUEbaJcZrWDrB4qgAf9APQOup/view?usp=sharing"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;