import { useEffect, useState } from "react";
import "../nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const currentURL = window.location.href;
  const [currentElement, setCurrentElement] = useState("home");
  useEffect(() => {
    if (currentURL.includes("store")) {
      setCurrentElement("store");
    } else if (currentURL.includes("library")) {
      setCurrentElement("library");
    } else if (currentURL === "http://localhost:3000/") {
      setCurrentElement("home");
    } else {
      setCurrentElement("");
    }
  }, [currentURL]);
  console.log("currenturl", currentURL);
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <div className="logo" />
      </div>
      <div className="searchAvatar">
        <div className="navButtons">
          {currentElement === "home" ? (
            <div className="navChosen">
              <div className="navGradient" />
              <div className="navBall" />
              <Link to={`/`} className="navText" style={{ color: "white" }}>
                HOME
              </Link>
            </div>
          ) : (
            <Link to={`/`} className="navText">
              HOME
            </Link>
          )}
          {currentElement === "store" ? (
            <div className="navChosen">
              <div className="navGradient" />
              <div className="navBall" />
              <Link
                to={`/store`}
                className="navText"
                style={{ color: "white" }}
              >
                STORE
              </Link>
            </div>
          ) : (
            <Link to={`/store`} className="navText">
              STORE
            </Link>
          )}
          {currentElement === "library" ? (
            <div className="navChosen">
              <div className="navGradient" />
              <div className="navBall" />
              <div className="navText" style={{ color: "white" }}>
                LIBRARY
              </div>
            </div>
          ) : (
            <div className="navText">LIBRARY</div>
          )}
        </div>
        <div className="search">
          <input className="input" type="text" placeholder="Find game..." />
          <div className="searchIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              fill="white"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
        </div>
        <div className="user" />
      </div>
    </div>
  );
};

export default Navbar;
