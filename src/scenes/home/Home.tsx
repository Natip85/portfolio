import "./home.css";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="welcome">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Welcome)}>
        <div className="home-wrap">
          <div className="emoji-wrap">
            <img className="me-emoji" src={require("./meEmoji.png")} alt="" />
          </div>
          <h1 className={isAboveMediumScreens?"intro-title":"sm-intro-title"}>Welcome.</h1>
          <p className="intro-desc">
            I’m a Full-Stack Developer located in Israel. I have a serious
            passion for creating intuitive, dynamic user experience
            applications.
            <br />
            <br /> I am a well organised person, problem solver, independent
            employee with a high attention to detail. Enthusiastic fan of the
            NBA, card games and movies/TV series. A family man and father of one
            boy.
            <br />
            <br />
            Interested in the entire Full Stack spectrum and working on
            ambitious projects with positive people.
          </p>
          <div className="btn-wrap">
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.ContactMe)}
              href={`#${SelectedPage.ContactMe}`}
            >
              <button className="contact-btn">
                Contact me <i className="bi bi-arrow-up-right myicon" />
              </button>
            </AnchorLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
