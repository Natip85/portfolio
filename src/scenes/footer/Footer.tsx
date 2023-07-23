import "./footer.css";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-wrap">
        <Link style={{marginRight: 10, fontSize: '1.5rem'}} to="https://github.com/Natip85" target="_blank">
          <i style={{color: 'black'}} className="bi bi-github" />
        </Link>
        <Link
        style={{fontSize: '1.5rem'}}
          to="https://www.linkedin.com/in/nati-peretz-785319159/"
          target="_blank"
        >
          <i style={{color: 'black'}} className="bi bi-linkedin"></i>
        </Link>
      </div>
      <div style={{padding: '2rem'}}>© {currentYear} Nati Peretz. All rights reserved.</div>
    </>
  );
};

export default Footer;
