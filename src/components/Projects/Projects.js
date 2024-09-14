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
import wind from "../../Assets/Projects/SongWind.png";
import XRHouse from "../../Assets/Projects/Carbon Emission.png";

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
              demoLink="https://drive.google.com/file/d/1rBJrhw72z39uMLSwWaTzHvXvs2w2PIVl/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={XRHouse}
              isBlog={false}
              title="House Appliance MR Game"
              description="A VR Project for a client that needs a simulation for energy consumption in his house."
              demoLink="https://drive.google.com/file/d/1e8qoiNaWa6vOWkntCr7J1FRybzoB5nJ1/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrexperimental}
              isBlog={false}
              title="VAW Running"
              description="The Second VR Game For VAW"
              demoLink="https://drive.google.com/file/d/1TcIcJOBdBWI9yKVs5X3l5pD-dzUoG6ZK/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrexperimental}
              isBlog={false}
              title="VAW Biking"
              description="The third VR Game For VAW"
              demoLink="https://drive.google.com/file/d/1c9IUW9YkH7YpGMdKLgF8706ujhaCXxo8/view?usp=sharing"              
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
              imgPath={wind}
              isBlog={false}
              title="Song of The Wind"
              description="A fun project to learn how to blend 2D and 3D in the same game and making a Turn Based combat inspired from Sea of Stars and Octopath Traveler."
              demoLink="https://drive.google.com/file/d/1kN5e_nyxLzcOayCU5iM7kSVPI_bgWuu1/view?usp=sharing"              
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
