import "./projects.css";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import Card from "../../components/Card";
import useMediaQuery from "../../hooks/useMediaQuery";

const test1 = require("./test1.JPG");

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const food: [string, number, number][] = [
  [test1, 340, 10],
  [test1, 20, 40],
  [test1, 60, 90],
  [test1, 80, 120],
];

const Projects = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="projects">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <div
          className={
            isAboveMediumScreens ? "projects-wrap" : "sm-projects-wrap"
          }
        >
          <div
            className={
              isAboveMediumScreens
                ? "left-project-desc"
                : "sm-left-project-desc"
            }
          >
            <h3
              className={
                isAboveMediumScreens ? "project-title" : "sm-project-title"
              }
            >
              Design. Apps.
              <br />
              Websites.
              <br />I do it all.
            </h3>
            <div
              className={
                isAboveMediumScreens
                  ? "project-subtitle"
                  : "sm-project-subtitle"
              }
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi
              saepe laboriosam fuga nesciunt suscipit similique odio id
              accusantium distinctio fugiat, in ad debitis dolorum at ut
              voluptatem exercitationem deleniti!
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi
              saepe laboriosam fuga nesciunt suscipit similique odio id
              accusantium distinctio fugiat, in ad
            </div>
          </div>

          <div className="cards-wrap">
            {food.map(([emoji, hueA, hueB]) => (
              <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
