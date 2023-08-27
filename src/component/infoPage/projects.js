import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "./animated.css";
import { ProjectCard } from "./projectCards";

const Projects = () => {
const projects = [
    {
    title: "Portfolio",
    description: "Design & Development",
    imgUrl: "https://i.ibb.co/MP2Y6cd/website.png",
    site: "/"
    },
    {
    title: "Burger Shop",
    description: "Design & Development",
    imgUrl:
        "https://img.freepik.com/free-vector/exterior-burger-shop_1308-16690.jpg?w=740&t=st=1669824113~exp=1669824713~hmac=1c827ab8a0cfde900c3f0c26b2efaab1ac95146245ba299fb852049c64d1523c",
    site: "https://fast-food-vercel.vercel.app"
    },
    {
    title: "Hotel Booking app",
    description: "Design & Development",
    imgUrl: "https://img.freepik.com/free-vector/online-app-tourism-traveler-with-mobile-phone-passport-booking-buying-plane-ticket_74855-10966.jpg?w=740&t=st=1669823968~exp=1669824568~hmac=5499ea54a3fc57c989dd6f8cdd67f47a75191524df34b33e8fcc55488839fbb3",
    site: "https://hotel-booking-9248.onrender.com"
    },
];

return (
    <section className="project" id="projects">
    <Container>
        <Row>
        <Col size={12}>
            <div>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Row>
                {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                })}
                </Row>
            </Tab.Container>
            </div>
        </Col>
        </Row>
    </Container>
    </section>
);
};

export default Projects;
