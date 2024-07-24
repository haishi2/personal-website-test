import { useState } from "react";
import "./../css/main.css";
import "./../css/noscript.css";
import sendEmail from "../backend/email";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(name, email, msg).then((res) => {
      console.log(res);
      if (!res.data.error) {
        window.alert("Message succesfully sent!");
      } else {
        window.alert(
          "The entered email does not exist, please try again or use a different email."
        );
      }
    });
    setEmail("");
    setName("");
    setMsg("");
  };

  return (
    <div className="inner">
      <h2>Get in touch</h2>
      <div className="style1">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field half">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="field half">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={msg}
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="button submit">
              Send Message
            </button>
          </form>
        </section>
        <section>
          <ul className="contact">
            <li>
              <h3>Email</h3>
              <a href="mailto:shihai797@gmail.com">shihai797@gmail.com</a>
            </li>
            <li>
              <h3>Phone</h3>
              <span>(416) 312-1655</span>
            </li>
            <li>
              <h3>Socials</h3>
              <ul className="icons">
                <li>
                  <a
                    href="https://github.com/haishi2"
                    className="icon brands fa-github"
                  >
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hai-shi-9b742223b/"
                    className="icon brands fa-linkedin-in"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
