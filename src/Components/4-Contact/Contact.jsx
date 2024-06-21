import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactUsAnimation from "../../animation/contact-us.json";


const Contact = () => {
  const [state, handleSubmit] = useForm("xeqyyyyb");

  if (state.succeeded) {
    return (
      <div className="success-message flex">
        <Lottie
          loop={false}
          style={{ height: "45px" }}
          animationData={doneAnimation}
        />

        <h1 className="message">Thanks for joining!</h1>
      </div>
    );
  }

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis
        accusantium modi ullam distinctio iste at dolorem dolorum consequuntur
        reprehenderit eum mollitia inventore optio similique soluta, neque ea
        aspernatur ratione?
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address: </label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div style={{ marginTop: "24px" }} className="flex">
            <label htmlFor="message">Your Message: </label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            Submit
          </button>
        </form>
        <div className="animation"> <Lottie
  className="contact-animation"
          style={{ height: "350px" }}
          animationData={contactUsAnimation}
        />
</div>
      </div>
    </section>
  );
};

export default Contact;
