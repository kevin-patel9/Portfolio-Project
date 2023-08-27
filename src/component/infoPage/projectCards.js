import { Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, site }) => {
return (
    <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
            <h4>{title}</h4>
            <div>{description}</div>
            <a href={site}>
                Visit <ArrowRight size={25} color="white" />
            </a>
            </div>
        </div>
    </Col>
)
}