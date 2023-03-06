import React from "react";

import "../../styles/partials/Footer.scss";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="container-footer">
      <section className="container-footer__socialLinks">
        <ul className="container-footer__listItem">
          <li>
            <a href="https://github.com/thiagoduutra" target="_blank">
              {" "}
              <FiGithub color="white" size={24} />{" "}
            </a>
          </li>
          <li>
            <a href="mailto: thiagoduutra01@gmail.com" target="_blank">
              <FiMail color="white" size={24} />{" "}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ThiagoDuutra" target="_blank">
              {" "}
              <FiTwitter color="white" size={24} />{" "}
            </a>
          </li>
        </ul>
        <p className="footer-phrase">Developed by Thiago Dutra</p>
      </section>
    </footer>
  );
};

export default Footer;
