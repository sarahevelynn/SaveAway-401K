import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FooterMovable from "../Footer/footerMovable";
import NavBar from "./NavBar";
import SaveAway401kFundChoicesFull from "./Assets/SaveAway401kFundChoicesFull.pdf";
import SaveAway401kFull from "./Assets/SaveAway401kFull.png";
import SaveAway401kFundChoicesSecure from "./Assets/SaveAway401kFundChoicesSecure.pdf";
import SaveAway401kSecure from "./Assets/SaveAway401kSecure.png";
import SaveAway401kFundChoicesSensible from "./Assets/SaveAway401kFundChoicesSensible.pdf";
import SaveAway401kSensible from "./Assets/SaveAway401kSensible.png";
import SaveAway401kFundChoicesStandard from "./Assets/SaveAway401kFundChoicesStandard.pdf";
import SaveAway401kStandard from "./Assets/SaveAway401kStandard.png";
import SaveAway401kFundChoicesConventional from "./Assets/SaveAway401kFundChoicesConventional.pdf";
import SaveAway401kConventional from "./Assets/SaveAway401kConventional.png";
import SaveAway401kFundChoicesVigorous from "./Assets/SaveAway401kFundChoicesVigorous.pdf";
import SaveAway401kVigorous from "./Assets/SaveAway401kVigorous.png";

export default function Pricing() {
  return (
    <div>
      <div id="aboutSections">
        <NavBar />

        <div id="fundLists">
          <div id="fundsDescription">
            <h1>
              At SaveAway, we offer only funds that have low expense ratios.
              <br />
              Many Mutual Fund companies have funds with
              <br />
              front end/ back end/ and management fees.
              <br />
              <br />
              This will erode your portfolio over time.
              <br />
              <br />
              By investing in ETFs (Exchange Traded Funds) you ensure that you
              are paying the lowest possible percentage in fees.
            </h1>
            <hr />
            <hr />
          </div>

          <div id="fundBreakDowns">
            <div id="fundInfo">
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesSecure}
                target="_blank"
              >
                <h3 id="fundHeader">
                  Secure Model
                  <br />
                  Portfolio Details
                </h3>
              </a>
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesSecure}
                target="_blank"
              >
                <img
                  id="fundIcon"
                  src={SaveAway401kSecure}
                  alt="SaveAway 401k Fund Choices Secure"
                />
              </a>
            </div>
            <div id="fundInfo">
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesSensible}
                target="_blank"
              >
                <h3 id="fundHeader">
                  Sensible Model <br />
                  Portfolio Details
                </h3>
              </a>
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesSensible}
                target="_blank"
              >
                <img
                  id="fundIcon"
                  src={SaveAway401kSensible}
                  alt="SaveAway 401k Fund Choices Sensible"
                />
              </a>
            </div>
            <div id="fundInfo">
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesStandard}
                target="_blank"
              >
                <h3 id="fundHeader">
                  Standard Model <br />
                  Portfolio Details
                </h3>
              </a>
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesStandard}
                target="_blank"
              >
                <img
                  id="fundIcon"
                  src={SaveAway401kStandard}
                  alt="SaveAway 401k Fund Choices Standard"
                />
              </a>
            </div>
            <div id="fundInfo">
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesConventional}
                target="_blank"
              >
                <h3 id="fundHeader">
                  Conventional Model <br />
                  Portfolio Details
                </h3>
              </a>
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesConventional}
                target="_blank"
              >
                <img
                  id="fundIcon"
                  src={SaveAway401kConventional}
                  alt="SaveAway 401k Fund Choices Conventional"
                />
              </a>
            </div>
            <div id="fundInfo">
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesVigorous}
                target="_blank"
              >
                <h3 id="fundHeader">
                  Vigorous Model <br />
                  Portfolio Details
                </h3>
              </a>
              <a
                id="fundTitle"
                href={SaveAway401kFundChoicesVigorous}
                target="_blank"
              >
                <img
                  id="fundIcon"
                  src={SaveAway401kVigorous}
                  alt="SaveAway 401k Fund Choices Vigorous"
                />
              </a>
            </div>
          </div>
        </div>

        <div id="fullFund">
          <a id="fundTitle" href={SaveAway401kFundChoicesFull} target="_blank">
            <h3 id="fullFundHeader">
              Complete Model
              <br />
              Portfolio Details
            </h3>
          </a>
          <a id="fundTitle" href={SaveAway401kFundChoicesFull} target="_blank">
            <img
              id="fullFundIcon"
              src={SaveAway401kFull}
              alt="SaveAway 401k Fund Choices Full"
            />
          </a>
        </div>
      </div>
      <FooterMovable />
    </div>
  );
}