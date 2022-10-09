import "../../App.css";

import coderImg from "../../social/coder.png";
import { ProjectCard } from "./cards";
import { TextAnimation } from "./Animation";
import { Link } from "react-router-dom";

export const MiddleArea = () => {
  return (
    <div className="info">
      <h1>Hi, I'm Kevin</h1>
      <h2>Frontend web developer</h2>
      <div>
        <span>I work with Reactjs for Projects</span>
      </div>

      <img src={coderImg} />
      <p>
        <Link to="/contactUs" className="contact-btn">
          Contact Me
        </Link>
      </p>

      <h3>Technologies and Tools</h3>
      <p>Here are some of the tools and technologies that I use</p>

      <TextAnimation />

      <div id="project">
        <h3>My PortFolio Project</h3>
        <ProjectCard />
      </div>
    </div>
  );
};
