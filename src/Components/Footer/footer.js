import { Flex } from "antd";
import React from "react";
import img1 from "../../Assets/images/iso.webp";
import img2 from "../../Assets/images/jsrs.webp";
export default function Footer() {
  return (
    <div
      style={{
        flexDirection: "row",
        fontWeight: "400",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{backgroundColor: "darkblue"}}>
        <div style={{ flexDirection: "row", alignItems: "space-evenly" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "space-between",
              marginTop: "30px",
              marginLeft: "30px;",
            }}
          >
            <div style={{ color: "white", marginLeft: "20px", width: "300px" }}>
              <h4>ABOUT COMPANY</h4>
              <p>
                Tranetech Software Solutions is a well-established and reputed
                enterprise software solutions provider in Abu Dhabi since 2016.
                We are the leader in providing the best quality cutting-edge
                software solutions to our clients. Our products and services
                deliver substantial performance improvements and enable our
                clients to consistently impart high-value solutions that give
                businesses an edge over their competitors and a return on their
                investment.
              </p>
              <img
                src={img1}
                style={{ paddingLeft: "30px", height: "120px", width: "250px" }}
                alt=""
              />
            </div>
            <div
              style={{
                color: "white",
                padding: "20px",
                paddingBottom: "5px",
                width: "300px",
              }}
            >
              <h4>GLOBAL HEADQUARTERS</h4>
              <p>
                30 N Gould St Ste R Sheridan, WY 82801, United States Phone:
                (307) 317-2754, (757) 919-3242 Phone: (307) 316-6320
                info@tranetech.com
              </p>
              <h4>
                <strong>CORPORATE OFFICE</strong>
              </h4>
              <p>
                Tranetech Software Solutions Al Masaood Tower-604, Hamdan Bin
                Mohammed Street, Abu Dhabi, United Arab Emirates, P.O. Box:
                35546 Phone: +971 2 443 3113 info@tranetech.com
                <br />
                <br />
                Tranetech Information Technology LLC Churchill Tower-3410,
                Business Bay Dubai, United Arab Emirates Phone: 04 514 9922
                infodxb@tranetech.com
              </p>
            </div>
            <div style={{ color: "white", padding: "10px", width: "300px" }}>
              <h4>
                <strong>REGIONAL OFFICE</strong>
              </h4>
              <p>
                1. Software Development Building 1, UL Cyberpark Fifth Floor,
                ULCCS LTD Special Economic Zone, Nellikode Village, Kozhikode,
                Kerala, 673016
                <br />
                <br />
                2. Infocity-Gandhinagar, Gujarat, India
              </p>
              <img
                src={img2}
                style={{ paddingLeft: "30px", height: "120px", width: "250px" }}
                alt=""
              />
              <br />
              <br />
              <h4>
                <strong>SALES OFFICE</strong>
              </h4>
              <p>1. Doha, Qatar, P.O. Box: 31799 info@tranetech.com</p>
            </div>
            <br />
            <div
              className="text-white d-flex flex-column mx-3"
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>
                <strong>FOLLOW US ON INSTAGRAM</strong>
              </p>
              <a
                type="primary"
                href="https://www.instagram.com/tranetech.com_/"
                role="button"
              >
                follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
