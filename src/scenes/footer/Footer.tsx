import AnchorLink from "react-anchor-link-smooth-scroll";
import "./footer.css";
import { Link } from "react-router-dom";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-wrap">
        <div className="footer-links-wrap">
          <div className="me-desc-sec">
            <AnchorLink
              className="footer-links"
              onClick={() => setSelectedPage(SelectedPage.Welcome)}
              href={`#${SelectedPage.Welcome}`}
            >
              <strong>Nati Peretz</strong>
              <br />
              Web Developer
            </AnchorLink>
          </div>
          <div className="pages-sec">
            <AnchorLink
              className="footer-links"
              onClick={() => setSelectedPage(SelectedPage.Welcome)}
              href={`#${SelectedPage.Welcome}`}
            >
              <strong>Welcome</strong>
            </AnchorLink>
            <AnchorLink
              className="footer-links"
              onClick={() => setSelectedPage(SelectedPage.AboutMe)}
              href={`#${SelectedPage.AboutMe}`}
            >
              About Me
            </AnchorLink>
            <AnchorLink
              className="footer-links"
              onClick={() => setSelectedPage(SelectedPage.Projects)}
              href={`#${SelectedPage.Projects}`}
            >
              Projects
            </AnchorLink>
            <AnchorLink
              className="footer-links"
              onClick={() => setSelectedPage(SelectedPage.ContactMe)}
              href={`#${SelectedPage.ContactMe}`}
            >
              Contact Me
            </AnchorLink>
          </div>
        </div>
        <Link
          style={{ marginRight: 10, fontSize: "1.5rem" }}
          to="https://github.com/Natip85"
          target="_blank"
        >
          <i className="bi bi-github footer-icons" />
        </Link>
        <Link
          style={{ fontSize: "1.5rem" }}
          to="https://www.linkedin.com/in/nati-peretz-785319159/"
          target="_blank"
        >
          <i className="bi bi-linkedin footer-icons"></i>
        </Link>
      </div>
      <div style={{ padding: "2rem" }}>
        © {currentYear} Nati Peretz. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
