import websiteImg from "../../cardImg/website.png";
import footApiImg from "../../cardImg/store.png";
import "../../App.css";
import { WebsiteModals } from "./modals/modal";
import { Button } from "react-bootstrap";

export const ProjectCard = () => {
  return (
    <div className="project">
      <div className="project-container">
        <img src={websiteImg} id="projectImg" />
        <div className="project-text">
          <h5>WEBSITE</h5>
          <p>Reactjs</p>
          <div className="project-link">
            <WebsiteModals />
          </div>
        </div>
      </div>
      <div className="project-container">
        <img src={footApiImg} id="projectImg" />
        <div className="project-text">
          <h6>Burger Shop</h6>
          <p>Reactjs & Redux </p>
          <div className="project-link">
            <Button variant="secondary">Visit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
