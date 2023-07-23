import "./about.css";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="aboutme">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
        <div
          className={
            isAboveMediumScreens ? "about-design-wrap" : "sm-about-design-wrap"
          }
        >
          <motion.div
            className={
              isAboveMediumScreens
                ? "design-title-wrap"
                : "sm-design-title-wrap"
            }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1
              className={
                isAboveMediumScreens
                  ? "about-design-title"
                  : "sm-about-design-title"
              }
            >
              Design
            </h1>
          </motion.div>
          <div
            className={
              isAboveMediumScreens ? "design-text-wrap" : "sm-design-text-wrap"
            }
          >
            <p
              className={
                isAboveMediumScreens ? "design-text" : "sm-design-text"
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at
              eum quasatibus ea non. Harum consequuntur hic, rerum distinctio
              dolore recusandae necessitatibus alias vitae aut ex adipisci,
              illum quidem reiciendis laboriosam incidunt accusamus nihil
              eveniet ab error voluptatum.
              <br />
              <br /> Architecto sint similique beatae asperiores hic, ut ratione
              facere nesciunt quis, harum ipsam incidunt! Debitis consequatur
              tempora architecto su
            </p>
          </div>
        </div>
        <div
          className={
            isAboveMediumScreens ? "about-app-wrap" : "sm-about-app-wrap"
          }
        >
          <motion.div
            className={
              isAboveMediumScreens ? "app-title-wrap" : "sm-app-title-wrap"
            }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1
              className={
                isAboveMediumScreens ? "about-app-title" : "sm-about-app-title"
              }
            >
              Apps
            </h1>
          </motion.div>
          <p className={isAboveMediumScreens ? "app-text" : "sm-app-text"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at
            eum quasatibus ea non. Harum consequuntur hic, rerum distinctio
            dolore recusandae necessitatibus alias vitae aut ex adipisci, illum
            quidem reiciendis laboriosam incidunt accusamus nihil eveniet ab
            error voluptatum.
            <br />
            <br /> Architecto sint similique beatae asperiores hic, ut ratione
            facere nesciunt quis, harum ipsam incidunt! Debitis consequatur
            tempora architecto su
          </p>
        </div>
        <div
          className={
            isAboveMediumScreens ? "about-web-wrap" : "sm-about-web-wrap"
          }
        >
          <motion.div
            className={
              isAboveMediumScreens ? "web-title-wrap" : "sm-web-title-wrap"
            }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1
              className={
                isAboveMediumScreens ? "about-web-title" : "sm-about-web-title"
              }
            >
              Web Design
            </h1>
          </motion.div>
          <div
            className={
              isAboveMediumScreens ? "web-text-wrap" : "sm-web-text-wrap"
            }
          >
            <p className={isAboveMediumScreens ? "web-text" : "sm-web-text"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at
              eum quasatibus ea non. Harum consequuntur hic, rerum distinctio
              dolore recusandae necessitatibus alias vitae aut ex adipisci,
              illum quidem reiciendis laboriosam incidunt accusamus nihil
              eveniet ab error voluptatum.
              <br />
              <br /> Architecto sint similique beatae asperiores hic, ut ratione
              facere nesciunt quis, harum ipsam incidunt! Debitis consequatur
              tempora architecto su
            </p>
          </div>
        </div>
        {isAboveMediumScreens && (
          <div className="my-mission">
            <div className="my-mission-header">My Mission</div>
            <div className="my-mission-text">
              I enjoy building innovative and creative websites, apps, or
              business solutions. My goal is to use my knowledge and
              understanding of development to implementation the newest
              technologies.
            </div>
          </div>
        )}

        {isAboveMediumScreens ? (
          <>
            <div className="about-me-profile">
              <div className="left-about-wrap">
                <img
                  className="me-image"
                  src={require("../projects/test1.JPG")}
                  alt=""
                />
                <button className="rsm-btn">
                  <i
                    style={{ backgroundColor: "transparent", marginRight: 10 }}
                    className="bi bi-person-fill"
                  />
                  Resume
                </button>
              </div>
              <div className="right-about-wrap">
                <div className="about-me-sec">
                  <h2 className="about-me-title">About me</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae modi, iure aliquid laborum debitis, earum id
                    recusandae assumenda, corporis veritatis quam soluta.
                    Numquam, distinctio hic. Repellat nostrum dolore delectus
                    corporis.
                  </p>
                </div>
                <button className="getintouch-btn">
                  <i
                    style={{ backgroundColor: "transparent", marginRight: 10 }}
                    className="bi bi-chat-dots"
                  />
                  Get in touch
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="sm-about-me-profile">
              <div className="sm-img-text-wrap">
              <img
                className="sm-me-image"
                src={require("../projects/test1.JPG")}
                alt=""
              />
              <h2 style={{ marginTop: "2rem" }} className="">
                About me
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                modi, iure aliquid laborum debitis, earum id recusandae
                assumenda, corporis veritatis quam soluta. Numquam, distinctio
                hic. Repellat nostrum dolore delectus corporis.
              </p>
              </div>
              <div className="sm-about-me-btn-wrap">
                <button className="sm-rsm-btn">
                  <i
                    style={{ backgroundColor: "transparent", marginRight: 10 }}
                    className="bi bi-person-fill"
                  />
                  Resume
                </button>
                <button className="sm-getintouch-btn">
                  <i
                    style={{ backgroundColor: "transparent", marginRight: 10 }}
                    className="bi bi-chat-dots"
                  />
                  Get in touch
                </button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default About;
