import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nassef Bouanane </span>
            from <span className="purple"> Sousse, Tunisia.</span>
            <br />
            I am currently employed as a Technical Game Designer at SheTech Studio in Riadh.
            <br />
            I have created there a new cutting edge VR training applications to track user progress over time.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games Obviously
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Fantasy Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "All the truth in the world is held in stories"{" "}
          </p>
          <footer className="blockquote-footer">Patrick Rothfuss</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
