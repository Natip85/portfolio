import "./contact.css";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactme">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
        <div className="contact-wrap">
          <div className="me-plus-you-wrap">
            <img
              className={isAboveMediumScreens?"contact-img":"sm-contact-img"}
              src={require("../projects/test1.JPG")}
              alt=""
            />
            <div className="plus-div">+</div>
            <div className={isAboveMediumScreens?"contact-profile-icon-wrap":"sm-contact-profile-icon-wrap"}>
              <i className={isAboveMediumScreens?"bi bi-person rounded-circle person-icon":"bi bi-person rounded-circle sm-person-icon"} />
            </div>
          </div>
          <h1 className={isAboveMediumScreens?"contact-phrase-text":"sm-contact-phrase-text" }>
            Let's Catch Up Over Some Coffee{" "}
            <img
              className={isAboveMediumScreens?"coffee-img":"sm-coffee-img"}
              src={require("./hot-beverage.webp")}
              alt=""
            />
          </h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className={isAboveMediumScreens?"contact-form":"sm-contact-form"}
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/5e53288da9af531f27ea4abe61462f68"
              method="POST"
            >
              <label className="input1label" htmlFor="input1">
                Name
              </label>
              <input
                className="input1"
                id="input1"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-danger">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <label className="input2label" htmlFor="input2">
                Email
              </label>
              <input
                className="input2"
                id="input2"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-danger">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <label className="messageinput" htmlFor="input3">
                Message
              </label>
              <textarea
                className="input3"
                id="input3"
                style={{ marginBottom: "3rem", border: "1px solid lightgray" }}
                rows={5}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-danger">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button className="form-submit-btn" type="submit">
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
