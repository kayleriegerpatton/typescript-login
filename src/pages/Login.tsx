import React from "react";

import "./Login.css";
import LoginForm from "../components/LoginForm/LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Login: React.FC = () => {
  return (
    <div className="page-wrapper">
      <FontAwesomeIcon icon={faGithub} className="icon" />
      <h1 className="page-title">Sign in to GitHub</h1>
      {/* <p>Fields with an asterisk (*) are required.</p> */}
      <LoginForm />
      <div className="callout">
        <a className="primary-link" href="/">
          Sign in with a passkey
        </a>
        <p>
          New to GitHub?&nbsp;
          <a
            className="primary-link"
            href="/https://github.com/signup?source=login"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
