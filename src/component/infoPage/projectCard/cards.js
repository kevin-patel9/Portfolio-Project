import "./cards.css"
import { WebsiteModals } from "../modals/modal";
import { Button } from "react-bootstrap";

export const ProjectCard = () => {
  return (
    <div className="project">
      <div className="project-container">
        <img src="https://i.ibb.co/MP2Y6cd/website.png" id="projectImg" />
        <div className="project-text">
          <h5>WEBSITE</h5>
          <p>Reactjs</p>
          <div className="project-link">
            <WebsiteModals />
          </div>
        </div>
      </div>
      <div className="project-container">
        <img src="https://img.freepik.com/free-vector/exterior-burger-shop_1308-16690.jpg?w=740&t=st=1669824113~exp=1669824713~hmac=1c827ab8a0cfde900c3f0c26b2efaab1ac95146245ba299fb852049c64d1523c" id="projectImg" />
        <div className="project-text">
          <h6>Burger Shop</h6>
          <p>Reactjs & Redux </p>
          <div className="project-link">
            <Button
              href="https://fast-food-vercel.vercel.app"
              target="_blank"
              variant="secondary"
            >
              Visit
            </Button>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src="https://img.freepik.com/free-vector/online-app-tourism-traveler-with-mobile-phone-passport-booking-buying-plane-ticket_74855-10966.jpg?w=740&t=st=1669823968~exp=1669824568~hmac=5499ea54a3fc57c989dd6f8cdd67f47a75191524df34b33e8fcc55488839fbb3"
          id="projectImg"
        />
        <div className="project-text">
          <h6>Hotel Booking App</h6>
          <p>Reactjs, Node JS, Redux</p>
          <div className="project-link">
            <Button
              href="https://hotel-booking-9248.onrender.com"
              target="_blank"
              variant="secondary"
            >
              Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
