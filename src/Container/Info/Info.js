import {
  faIndianRupeeSign,
  faPercentage,
  faTag,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Terms } from "../../Component/Common/Common2";
import "./info.css";

const Info = () => {
  const navigate = useNavigate();
  return (
    <div
      className="  d-flex flex-column  justify-items-center  "
      style={{ padding: " 0rem 5rem" }}
    >
      <li
        className="ps-2"
        style={{
          color: "#000000",
          fontSize: "16px ",
          fontFamily: "'Poppins', sans-serif",
          listStyle: "none",
          cursor: "pointer",
          marginTop: "5rem",
        }}
      >
        UI/UX {">"} Refers & Earn
      </li>

      <div class="container p-0 m-2 mt-4" style={{ marginTop: "2rem" }}>
        <div class="row ">
          <div class="col-6 col-md-3">
            <p className="p2">Referral Earnings</p>
            <p className="p1Money">₹ 500</p>
          </div>
          <div class="col-6 col-md-3 ">
            <p className="p2">Total Referrals</p>
            <p className="p1Money">₹ 700</p>
            <span
              class="badge rounded-pill pt-2 pb-2 pe-4 ps-4"
              style={{ background: "#800080" }}
            >
              Withdraw Balance
            </span>
          </div>
          <div class="col-6 col-md-3">
            <p className="p2">Wallet Balance</p>
            <p className="p1Money">₹ 500</p>
          </div>

          <div class="col-6 col-md-3 " style={{ marginLeft: "0rem" }}>
            <label
              style={{
                color: "#800080",
                fontSize: "24px ",
                fontFamily: "Poppins, sans-serif",
              }}
              for="referralCode"
              class="form-label"
            >
              Your Referral Code
            </label>
            <input
              class="form-control text-center "
              id="referralCode"
              placeholder="E  D  H  C  H  5  4"
              style={{
                borderImage: "linear-gradient(to right,  #fd1d1d,#800080) 10",
                borderWidth: "2px",
              }}
            />
          </div>
        </div>
      </div>
      <div class="container-fluid p-0" style={{ marginTop: "2rem" }}>
        <h1 className="header">How does it work ?</h1>
        <div class="container ">
          <div class="row">
            <div class="col" style={{ paddingLeft: "0" }}>
              <ul
                class="d-flex flex-row list-group-flush"
                style={{ paddingLeft: "0" }}
              >
                <li class="list-group-item me-1" className="icon">
                  <FontAwesomeIcon icon={faUsers} />
                </li>
                <ul>
                  <h1 className="heading">Invite your Friends</h1>
                  <p className="para">
                    Share the link tutedude.com with your friends
                  </p>
                </ul>
              </ul>
            </div>
            <div class="col" style={{ paddingLeft: "0" }}>
              <ul
                style={{ paddingLeft: "0" }}
                class="d-flex flex-row list-group-flush"
              >
                <li
                  style={{ paddingLeft: "17px" }}
                  class="list-group-item me-1"
                  className="icon"
                >
                  <FontAwesomeIcon icon={faWallet} />
                </li>
                <ul>
                  <h1 className="heading">Transfer money from wallet</h1>
                  <p className="para">
                    Share the link tutedude.com with your friends
                  </p>
                </ul>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col" style={{ paddingLeft: "0" }}>
              <ul
                style={{ paddingLeft: "0" }}
                class="d-flex flex-row list-group-flush"
              >
                <li
                  style={{ paddingLeft: "17px" }}
                  class="list-group-item me-1"
                  className="icon"
                >
                  <FontAwesomeIcon icon={faTag} />
                </li>
                <ul>
                  <h1 className="heading">Friends purchases and course</h1>
                  <p className="para">
                    Share the link tutedude.com with your friends
                  </p>
                </ul>
              </ul>
            </div>
            <div style={{ paddingLeft: "0" }} class="col">
              <ul
                style={{ paddingLeft: "0" }}
                class="d-flex flex-row list-group-flush"
              >
                <li
                  style={{ paddingLeft: "17px" }}
                  class="list-group-item me-1"
                  className="icon"
                >
                  <FontAwesomeIcon icon={faPercentage} />
                </li>
                <ul>
                  <h1 className="heading">Your friend gets ₹ 200 off</h1>
                  <p className="para">
                    Share the link tutedude.com with your friends
                  </p>
                </ul>
              </ul>
            </div>
          </div>
          <div class="row">
            <div style={{ paddingLeft: "0" }} class="col">
              <ul
                style={{ paddingLeft: "0" }}
                class="d-flex flex-row list-group-flush"
              >
                <li
                  style={{ paddingLeft: "17px" }}
                  class="list-group-item me-1"
                  className="icon"
                >
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                </li>
                <ul>
                  <h1 className="heading">You get ₹ 200 as referral money</h1>
                  <p className="para">
                    Share the link tutedude.com with your friends
                  </p>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          color: "#800080",
          paddingTop: "2rem",
          fontSize: "18px ",
          fontFamily: "'Poppins', sans-serif",
        }}
        class="ps-2"
      >
        Friends Who Enrolled
      </p>
      <Terms />
    </div>
  );
};

export default Info;
