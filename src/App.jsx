import { useEffect } from "react";
import "./css/main.css";
import "./css/noscript.css";
import Sidebar from "./components/sidebar";
import Project from "./components/project_section";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  const sidebarSections = ["Welcome", "Projects", "Skills", "Contact Me"];
  const hrefs = ["#intro", "#one", "#two", "#three"];

  const projNames = ["AniForMe", "ClassLynk"];
  const projdescs = [
    "An innovative application that recommends new anime to watch based on user data. Made with Python and Pygame, using a dataset of users and shows on Myanimelist.",
    "Making the process of course selection simpler by automatically generating timetables for students with a list of classes and preferences, along with viewing daily routes to make navigation easy. Made using Java and Spring, with Firebase and the Google Maps API.",
  ];
  const projLinks = [
    "https://github.com/haishi2/ani-for-me",
    "https://github.com/Isolumi/ClassLynk",
  ];

  const types = ["Frontend", "Backend"];

  const skills = [
    ["React", "JavaScript", "HTML/CSS"],
    ["Python", "Java", "Node + Express"],
  ];

  const yoe = [
    ["0.5", "1.5", "1.5"],
    ["4", "3", "0.5"],
  ];

  return (
    <>
      <Sidebar sections={sidebarSections} hrefs={hrefs}></Sidebar>
      <div id="wrapper">
        <section id="intro" className="wrapper style1 fullscreen fade-up">
          <div className="inner">
            <h1>Hi, I'm Hai Shi</h1>
            <p>
              A computer science specialist at the University of Toronto
              <br />
              focusing on AI and computer systems.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="./assets/Shi_Hai_resume.pdf"
                  className="button scrolly"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section id="one" className="wrapper style2 spotlights">
          {projNames.map((name, idx) => (
            <Project
              key={idx}
              name={name}
              desc={projdescs[idx]}
              link={projLinks[idx]}
            />
          ))}
        </section>
        {/* <section id="two" className="wrapper style3 fade-up"></section> */}
        <section id="two" className="wrapper style3">
          <Skills skills={skills} years={yoe} types={types}></Skills>
        </section>

        <section id="three" className="wrapper style1">
          <Contact></Contact>
        </section>
      </div>
    </>
  );
}

export default App;
