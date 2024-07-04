import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import windbreaker from "../../Assets/Projects/WindBreaker.png";
import vaw from "../../Assets/Projects/VAWLogo.png";
import suicide from "../../Assets/Projects/suicide.png";
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
          
          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
