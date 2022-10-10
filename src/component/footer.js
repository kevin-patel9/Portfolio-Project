import "../App.css";
import instaLogo from "../social/instaLogo.png";
import linkedinLogo from "../social/linkedinLogo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h4>About Me :</h4>
        <div className="footer-detail">
          <p className="footer-text">
            Got into Coding in 2018, Dived into into seriously during start of
            2022 and ever since then i've been dedicated to learn more. So far
            i've used Javascript, React.js, Bootstrap and TyperScript. Feel free
            to check my Project.
          </p>

          {/* social Links */}

          <div className="social-links">
            <h4>Social Media</h4>
            <div className="links">
              <a href="https://www.instagram.com/kevinpatel3/" target="_blank">
                <img src={instaLogo} />
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-patel-83265b174/"
                target="_blank"
              >
                <img src={linkedinLogo} />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">Copyright 2022 &#169;</div>
      </div>
    </div>
  );
};
