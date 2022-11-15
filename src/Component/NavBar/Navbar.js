import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        margin: "0",
        zIndex: "100",
      }}
    >
      <nav class="navbar" style={{ paddingTop: "0", background: "white" }}>
        <div class="container-fluid " style={{ padding: "0.5rem 3rem" }}>
          <div class="d-flex flex-row justify-content-center">
            <Logo />
            <p
              style={{
                color: "#800080",
                fontSize: "18px ",
                fontFamily: "'Poppins', sans-serif",
                marginLeft: "5px",
              }}
              class="navbar-brand"
              href="#"
            >
              TuteDude
            </p>
          </div>
          <ul class="d-flex flex-row list-group-flush">
            <li className="p1">My Assignment</li>
            <li className="p1">Chat with Mentor</li>
            <li
              style={{
                color: "#800080",
                fontSize: "16px ",
                fontFamily: "'Poppins', sans-serif",
              }}
              class="list-group-item me-1"
            >
              <FontAwesomeIcon
                onClick={() => navigate("/info")}
                icon={faCircleUser}
              />
            </li>
            <li
              style={{
                color: "#800080",
                fontSize: "16px ",
                fontFamily: "'Poppins', sans-serif",
              }}
              class=" list-group-item dropdown-toggle"
            >
              ProfileName
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
