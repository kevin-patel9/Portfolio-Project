import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './contactPage.css'

export const ContactMe = () => {
  return (
    <div className="form">
      <p className="home-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-house-door"
          viewBox="0 0 16 16"
        >
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </svg>
        <Link className="homepage-link" to="/">
          Return Home
        </Link>
      </p>
      <p>
        For any other enquires, fill out the form below and will get back to
        you.
      </p>
      <Form action="https://formspree.io/f/mbjbkljg" method="POST">
        <Form.Group className="mx-5 my-3" controlId="exampleForm">
          <Form.Label>Your email: </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required />
        </Form.Group>
        <Form.Group className="mx-5" controlId="exampleForm">
          <Form.Label>Your message:</Form.Label>
          <Form.Control as="textarea" name="message" rows={8} required />
        </Form.Group>
        <Button className="mx-5 my-3" id="form-btn" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};
