import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list-item">
          <a
            className="secondary-link"
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Terms
          </a>
        </li>
        <li className="footer-list-item">
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="secondary-link"
          >
            Privacy
          </a>
        </li>
        <li className="footer-list-item">
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="secondary-link"
          >
            Docs
          </a>
        </li>
        <li className="footer-list-item">
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="secondary-link"
          >
            Contact GitHub Support
          </a>
        </li>
        <li className="footer-list-item">
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="secondary-link"
          >
            Manage cookies
          </a>
        </li>
        <li className="footer-list-item">
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="secondary-link"
          >
            Do not share my personal information
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
