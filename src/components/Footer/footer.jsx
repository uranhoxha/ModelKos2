import "./footer.scss";
import logo from "../../assets/footerLogo.svg";
import whiteLogo from "../../assets/logoWhite.svg";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import { FormattedMessage } from "react-intl";
import { useState } from "react";

function Footer(props) {
  const primaryFooterData = [
    {
      title: "MODELS",
      links: [
        "Book Model",
        "Man Models",
        "Woman Models",
        "Kid Models",
        "Membership",
      ],
    },
    {
      title: "ABOUT",
      links: ["Company", "Our Team", "Partners", "Career", "News & Events"],
    },
    {
      title: "WORK",
      links: [
        "Photography",
        "Design",
        "Makeup Artist",
        "Fashion Show",
        "Advertising",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Privacy Statement",
        "Terms Of Service",
        "Help",
        "FAQ",
        "Contacts",
      ],
    },
  ];

  const secondaryFooterData = [
    {
      title: "MODELS",
      contacts: [
        "Women - 0207 376 7764",
        "Men - 0207 376 7464",
        "bookamodel@modelkos.com",
      ],
    },
    {
      title: "MANAGEMENT",
      contacts: ["1st Floor", "5 Jubilee Place", "Prishtina, Kosovo"],
    },
    {
      title: "JOBS",
      contacts: ["jobs@modelkos.com"],
    },
  ];

  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  return (
    <div className="footer-container section-padding">
      <div className="footer-logo-container">
        <h1>Modeling</h1>
        <img src={logo} alt="Footer Logo" />
        <h1>Modeling</h1>
      </div>
      <div className="footer-content">
        <div className="footer-primary">
          {primaryFooterData.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-secondary">
          {secondaryFooterData.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.contacts.map((contact, i) => (
                  <li key={i}>{contact}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="outer-footer-container section-padding">
        <div className="outer-footer-first">
          <div className="outer-footer-logo">
            <img src={whiteLogo} alt="" />
            <h2>Modelkos</h2>
          </div>
          <p>© 2022 · MODELKOS</p>
        </div>

        <div className="outer-footer-second">
          <p>Privacy Statement</p>
          <p>|</p>
          <p>Terms Of Service</p>
          <p>|</p>
          <p>Help/FAQ</p>
        </div>

        <div className="outer-footer-third">
          <div className="outer-footer-socials">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaTwitter />
          </div>
          <p>
            <FormattedMessage
              id="footer-paragraph2"
              defaultMessage="©2023 ModelKos | ALL RIGHTS RESERVED"
            ></FormattedMessage>
          </p>
          <SelectLanguage
            setLanguage={props.setLanguage}
            language={props.language}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
