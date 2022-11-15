import React from "react";
import { useNavigate } from "react-router-dom";
import { Terms } from "../../Component/Common/Common2";
import "./HomePage.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      //   class="container-fluid  d-flex flex-column  align-items-center"
      //   style={{ height: "100vh" }}
      class="container-fluid  d-flex flex-column justify-content-center  "
      className="main"
    >
      <li
        className="ps-2"
        style={{
          color: "#000000",
          fontSize: "16px ",
          fontFamily: "'Poppins', sans-serif",
          listStyle: "none",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
        onClick={() => navigate("/info")}
      >
        UI/UX {">"} Refers & Earn {">"} <em>Friends Referred</em>
      </li>
      <h1 onClick={() => navigate(-1)} className="back">
        Go Back -{">"}
      </h1>
      <div class="container-fluid d-flex flex-row justify-content-between mt-2">
        <div style={{ marginRight: "3px" }}>
          <label
            style={{
              color: "#800080",
              fontSize: "16px ",
              fontFamily: "Poppins, sans-serif",
            }}
            for="referralCode"
            class="form-label"
          >
            Your Referral Code
          </label>
          <input
            class="form-control"
            id="referralCode"
            placeholder="E D H C H 5 4"
          />
        </div>
        <div
          class="border border-2 rounded text-center "
          style={{ marginLeft: "7px" }}
        >
          <p
            style={{
              color: "#800080",
              fontSize: "16px ",
              fontFamily: "'Poppins', sans-serif",
              padding: "0 1rem",
              marginBottom: "0",
            }}
          >
            Wallet Balance
          </p>
          <h1
            style={{
              color: "#000000",
              fontSize: "16px ",
              fontFamily: "'Poppins', sans-serif",
              // padding: "0 1rem",
              marginBottom: "0",
            }}
          >
            ₹ 500
          </h1>
        </div>
      </div>
      <>
        <div
          class="container-fluid "
          style={{ marginTop: "2rem", marginBottom: "4rem" }}
        >
          <header
            style={{
              color: "#800080",
              fontSize: "24px ",
              fontFamily: "'Poppins', sans-serif",
              marginBottom: "1rem",
            }}
          >
            Friends who enrolled{"(3)"}
          </header>
          <div class="row">
            <div
              class=" col-sm card me-3 mb-2 border-0 rounded-4 "
              style={{
                backgroundImage: "linear-gradient(to left, #800080, #f53838)",
              }}
            >
              <div class="card-body ">
                <h1 className="title">
                  Rohit Kumar <time className="timing">14 Sep, 2022</time>
                </h1>
                <h6
                  style={{
                    fontSize: "20px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  class="card-subtitle mb-2 text-light  "
                >
                  Courses Enrolled{"(6)"}
                </h6>

                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Secondary
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Success
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Danger
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Warning
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {" "}
                  Info
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Light
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Dark
                </span>
              </div>
            </div>
            <div
              class="card col-sm me-3 mb-2 border-0 rounded-4"
              style={{
                backgroundImage: "linear-gradient(to left, #800080, #f53838)",
              }}
            >
              <div class="card-body">
                <h1 className="title">
                  Rohit Kumar <time className="timing">14 Sep, 2022</time>
                </h1>
                <h6
                  style={{
                    fontSize: "20px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  class="card-subtitle mb-2 text-light  "
                >
                  Courses Enrolled{"(6)"}
                </h6>

                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Secondary
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Success
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Danger
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Warning
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {" "}
                  Info
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Light
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Dark
                </span>
              </div>
            </div>
            <div
              class="card col-sm card me-3 mb-2 border-0 rounded-4"
              style={{
                backgroundImage: "linear-gradient(to left, #800080, #f53838)",
              }}
            >
              <div class="card-body">
                <h1 className="title">
                  Rohit Kumar <time className="timing">14 Sep, 2022</time>
                </h1>
                <h6
                  style={{
                    fontSize: "20px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  class="card-subtitle mb-2 text-light  "
                >
                  Courses Enrolled{"(6)"}
                </h6>

                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Secondary
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Success
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Danger
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Warning
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {" "}
                  Info
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Light
                </span>
                <span
                  class="badge rounded-pill border border-2 m-2"
                  style={{
                    fontSize: "16px ",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Dark
                </span>
              </div>
            </div>
          </div>
        </div>
      </>

      <Terms />
    </div>
  );
};
